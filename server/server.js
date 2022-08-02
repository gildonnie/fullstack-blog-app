//import express
const express = require('express');
// 
const cors = require('cors');
// import mangoose
const mongoose = require('mongoose');
// reads .env file
const dotenv = require('dotenv').config();
// import the feed routes
const blogRoutes = require('./routes/blog');
// This is our localhost port
const PORT = process.env.PORT || 5000;
// create the express app
const app = express();

// 
app.use(cors());

// to parse incoming json
app.use(express.json());

// forward any incoming request that starts with '/blog' to blogRoutes
app.use('/blog', blogRoutes);

// setup a database connection using mongoose
// Uses the connection string given from your atlas server
mongoose
  .connect(process.env.MONGO_URI)
  .then(result => {
    // listen to incoming requests on port 8080
    app.listen(PORT);
  })
  .catch(err => console.log('err', err))