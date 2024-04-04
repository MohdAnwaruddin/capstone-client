// Import useContext from react
"use client"

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext, { AuthContextType } from '@/context/AuthContext'; // Import AuthContext
import Search from "@/app/components/layout/Search";

interface Article {
  title: string;
  description: string;
  author: string;
  url: string;
  ID: string;
  category: string;
  content: string;
  urlToImage: string | null;
  publishedAt: Date;
}

interface AllNewsProps {}

const AllNews: React.FC<AllNewsProps> = () => {
  const authContext = useContext(AuthContext); // Retrieve auth context

  const [mynews, setMyNews] = useState<Article[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        category ? `http://localhost:3001/api/news/category/${category}` : "http://localhost:3001/api/news"
      );
      setMyNews(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    // Filter news based on searchTerm if it's not empty
    if (searchTerm.trim() !== '') {
      const filteredNews = mynews.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMyNews(filteredNews);
    } else {
      // If searchTerm is empty, fetch all news again
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <div className="container">
        <Search onFilter={setSearchTerm} />
        <Navbar onCategoryChange={handleCategoryChange} />
        <div className="grid">
          {mynews.map((ele: Article, index: number) => {
 
          if (ele.urlToImage && ele.author ) {

          
           return <div key={index} className="mt-8 max-w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-150 ease-out hover:scale-105">
              <a href={ele.url}>
                <img className="w-full rounded-t-lg" style={{height:"15rem"}} src={ele.urlToImage || "https://via.placeholder.com/150"} alt={ele.urlToImage}  />

              </a>
              <div className="p-5" style={{overflow:"hidden"}}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.author || "Unknown Author"}</h5>
                <p style={{height:"5rem", overflow:"hidden"}} className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.title} </p>
                
                {/* Perform null check on authContext before accessing its properties */}
                {authContext && (
                  <a href={authContext.isLoggedIn ? ele.url : '/login'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {authContext.isLoggedIn ? 'Read more' : 'Login to read more'}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>  
                )}
              </div>
            </div> }
})}
        </div>
      </div>
    </>
  );
};

interface NavbarProps {
  onCategoryChange: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCategoryChange }) => {
  const categories = ["health", "science", "entertainment", "business", "sports"];

  return (
    <nav className="mt-4 flex justify-center flex-col sm:flex-row items-center gap-8 text-gray-500 font-semibold">
      {categories.map((category, index) => (
        <div key={index} className="button hover:text-orange-500 cursor-pointer" onClick={() => onCategoryChange(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      ))}
    </nav>
  );
};

export default AllNews;
