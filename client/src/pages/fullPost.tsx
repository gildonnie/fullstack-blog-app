import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  const { state } = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setTitle(state.title);
    setContent(state.content);
    setCategory(state.category);
  }, [id, state]);

  return (
    <FullPost>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{category}</p>
    </FullPost>
  );
}

export default fullPost;
