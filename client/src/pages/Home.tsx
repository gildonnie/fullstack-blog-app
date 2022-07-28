import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Post } from '../types';
import Posts from '../components/Posts';

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response: AxiosResponse) => {
        setPosts(response.data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
