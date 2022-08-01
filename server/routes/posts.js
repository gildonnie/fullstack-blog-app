const express = require('express');
const router = express.Router();
const {
  getPosts,
  setPost,
  updatePost,
  deletePost,
} = require('../controllers/postsController');

module.exports = router;