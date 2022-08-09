import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';

function fullPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get<Post>(`http://localhost:5000/blog/posts/${id}`)
      .then((response: AxiosResponse) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setCategory(response.data.category);
      });
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{category}</p>
    </div>
  );
}

export default fullPost;
