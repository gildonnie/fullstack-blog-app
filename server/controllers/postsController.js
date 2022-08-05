const Post = require('../models/Post');

const getPosts = (req, res, next) => {
    // return array of existing posts
    Post.find().then(foundPosts => {
      res.json({
        message: "All posts",
        posts: foundPosts
      });
    });
  }

const showPost = (req, res) => {
   Post.findById(req.params.id, (err, foundPost) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      res.json(foundPost);
    });
  };
  
const createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category ;
   
    // create a new Post instance
    const post = new Post({
      title: title,
      content: content,
      category: category
    });
   
    // save the instance to the database
    post
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: postSaved
      });
    })
    .catch(err => console.log('err', err));
  }

const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
  
      res.json(updatedPost);
    });
  };

module.exports = {
    getPosts,
    showPost,
    createPost,
    updatePost,
};
  