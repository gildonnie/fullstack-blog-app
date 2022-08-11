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
router.get('/posts/:id', postsController.showPost);
// GET /blog/categories will be handled right now
router.get('/categories', postsController.getCategories);
// POST /blog/post will be handled right now
router.post('/post', postsController.createPost);
// PUT /blog/post will be handled right now
router.put('/posts/:id', postsController.updatePost);
// DELETE /blog/post will be handled right now
router.delete('/posts/:id', postsController.deletePost);


// export the router
module.exports = router;