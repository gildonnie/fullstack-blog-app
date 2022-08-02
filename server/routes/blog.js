// import express
const express = require('express');
// import the logic controller
const postsController = require('../controllers/postsController');
// create a router
const router = express.Router();

// define your routes
// add the function that should be executed for this route

// GET /blog/posts will be handled right now
router.get('/posts', postsController.getPosts);
//
router.get('/posts/:id', postsController.showPost);


// POST /blog/post will be handled right now
router.post('/post', postsController.createPost);
// POST /blog/post will be handled right now
// router.post('/post', postsController.createPost);

// export the router
module.exports = router;