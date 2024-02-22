const express = require('express')
const app = express()
const User = require('./models/user.js')
const accountController = require('./controllers/accountController')
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const passport = require('passport');
const newsRoutes = require('./routes/newsRoutes.js');
app.use(bodyParser.urlencoded({ extended: false }));

require('./middleware/auth.js')()


const { connect } = require("./Database_mongoose.js");
//const mongoose = require('mongoose');
// const mongoString = 'MongoDB Connection String';
// mongoose.connect(mongoString);

connect().then((connectedClient) => {
    client = connectedClient;
    console.log("Connected to MongoDB");
   }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the application if the database connection fails
   });

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
app.use(passport.initialize());

app.get('/', (req, res) => { res.send('Introduction JWT Auth') })
app.get('/api/profile', passport.authenticate('jwt', { session: false }), accountController.profile)
app.post('/api/login', passport.authenticate('local', { session: false }), accountController.login)
app.post('/api/register', accountController.register)

app.use('/api/news', newsRoutes);
app.listen(8000, () => { console.log('Server started.') });