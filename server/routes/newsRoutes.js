// routes/newsRoutes.js
require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
const News = require('../models/News');
const cron = require('node-cron');

const apiKey = process.env.NEWS_API_KEY;

const fetchDataAndStoreInMongoDB = async () => {
  const newsEndpoints = [
    'https://newsapi.org/v2/top-headlines?sources=techcrunch',
    'https://newsapi.org/v2/top-headlines?country=us&category=business'
  ];

  try {
    for (const endpoint of newsEndpoints) {
      const response = await axios.get(endpoint, {
        params: {
          apiKey
        },
      });

      const articles = response.data.articles;

      for (const article of articles) {
        // Create a News object and save it to MongoDB without summarization
        try {
          const newsItem = new News({
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            // Add other fields as needed
          });

          await newsItem.save();
        } catch (error) {
          console.error('Error fetching or storing data:', error.message);
        }
      }
    }

    console.log('Data fetched and stored successfully!');
  } catch (error) {
    console.error('Error fetching or storing data:', error.message);
  }
};

// Schedule the fetchDataAndStoreInMongoDB function to run every midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running fetchDataAndStoreInMongoDB...');
  await fetchDataAndStoreInMongoDB();
});

console.log('Cron job scheduled to run every midnight.');

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new news article
router.post('/', async (req, res) => {
    const { title, description, url, urlToImage } = req.body;
  
    try {
      const newNews = await News.create({ title, description, url, urlToImage});
      res.json(newNews);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

//Get a specific news article by ID
router.get('/id/:id', async (req, res) => {
    const newsId = req.params.id;
    try {
      const news = await News.findById(newsId);
  
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
  
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a news article by ID (PUT)
router.put('/id/:id', async (req, res) => {
    const newsId = req.params.id;
    const { title, description, url, urlToImage } = req.body;
  
    try {
      const updatedNews = await News.findByIdAndUpdate(
        newsId,
        { title, description, url, urlToImage },
        { new: true } // Return the updated document
      );
  
      if (!updatedNews) {
        return res.status(404).json({ error: 'News not found' });
      }
  
      res.json({ message: 'News updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Delete a news article by ID
router.delete('/id/:id', async (req, res) => {
  const newsId = req.params.id;

  try {
    const deletedNews = await News.findByIdAndDelete(newsId);

    if (!deletedNews) {
      return res.status(404).json({ error: 'News not found' });
    }

    res.json({message: 'News deleted successfully' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});


// Get a specific news article by title
router.get('/title/:title', async (req, res) => {
    const newsTitle = req.params.title;
    try {
        console.log('Searching for news with title:', newsTitle);
        const escapedTitle = newsTitle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const news = await News.findOne({ title: { $regex: new RegExp(escapedTitle, 'i') } });

        if (!news) {
            console.log('News not found');
            return res.status(404).json({ error: 'News not found' });
        }

        console.log('Found news:', news);
        res.json(news);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new news article by title
router.post('/title/:title', async (req, res) => {
    const { description, url, urlToImage } = req.body;
    const newsTitle = req.params.title;

    try {
        // Check if a news article with the same title already exists
        const existingNews = await News.findOne({ title: { $regex: new RegExp(newsTitle, 'i') } });

        if (existingNews) {
            return res.status(409).json({ error: 'News with the same title already exists' });
        }

        // Create a new news article
        const newNews = await News.create({ title: newsTitle, description, url, urlToImage });

        res.status(201).json(newNews);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an existing news article by title
router.put('/title/:title', async (req, res) => {
    const { description, url, urlToImage } = req.body;
    const newsTitle = req.params.title;

    try {
        // Find the news article based on the title
        const news = await News.findOne({ title: { $regex: new RegExp(newsTitle, 'i') } });

        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        // Update the description and url
        news.description = description;
        news.url = url;
        news.urlToImage = urlToImage;
        await news.save();

        res.json({ message: 'News updated successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete an existing news article by title
router.delete('/title/:title', async (req, res) => {
  const newsTitle = req.params.title;

  try {
      // Find and remove the news article based on the title
      const news = await News.findOneAndDelete({ title: { $regex: new RegExp(newsTitle, 'i') } });

      if (!news) {
          return res.status(404).json({ error: 'News not found' });
      }

      res.json({ message: 'News deleted successfully' });
  } catch (error) {
      console.error('Error:', error); // Log the error for debugging
      res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

// Add comment to a news article
router.post('/id/:id/comments', async (req, res) => {
  const newsId = req.params.id;
  const { text, user } = req.body;

  try {
    const news = await News.findById(newsId);

    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }

    // Add the comment to the news article
    news.comments.push({ text, user });
    await news.save();

    res.json({ message: 'Comment added successfully', news });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Retrieve comments for a news article
router.get('/id/:id/comments', async (req, res) => {
  const newsId = req.params.id;

  try {
    const news = await News.findById(newsId);

    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }

    const comments = news.comments || [];
    res.json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

