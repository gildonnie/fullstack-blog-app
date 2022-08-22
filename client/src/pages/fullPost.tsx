import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../types';

const FullPost = styled.div`
  text-align: center;
  
  padding-right: 25%;
  padding-left: 25%;
  margin-right: auto;
  margin-left: auto;
  h1 {
    font-family: 'Cutive Mono', monospace;
  }
  p {
    line-height: 39px; 
  }
`;
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
    <FullPost>
      <h1>
        {title}
      </h1>
      <p>{content}</p>
      <p>{category}</p>
    </FullPost>
  );
}

export default fullPost;
