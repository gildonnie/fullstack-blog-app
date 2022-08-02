import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Post } from '../types';
import Posts from './Posts';

function PostData() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/blog/posts')
      .then((response: AxiosResponse) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      });
  }, []);
  return (
    <div className="wrapper">
      <Posts posts={posts} />
    </div>
  );
}

export default PostData;
