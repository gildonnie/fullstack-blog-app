import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Post } from '../types';
import Posts from './Posts';

function PostData() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response: AxiosResponse) => {
        // console.log(response.data);
        setPosts(response.data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Posts posts={posts} />
    </div>
  );
}

export default PostData;
