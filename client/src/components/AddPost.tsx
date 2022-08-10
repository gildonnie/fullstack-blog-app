import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Post } from '../types';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
  textarea {
    min-width: 80%;
    min-height: 40rem;
  }
  label {
    margin: 1rem;
    font-family: 'Cutive Mono', monospace;
  }
  button {

  }
`;

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post<Post>(
        'http://localhost:5000/blog/post',
        { title: `${title}`, content: `${content}`, category: `${category}` },
      );
      navigate('/', { replace: true });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Wrap>
        <label htmlFor="AddTitle">
          Title
          <input
            id="AddTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <textarea value={content} placeholder="Add your content here" onChange={(e) => setContent(e.target.value)} />
        <label htmlFor="AddCategory">
          Category
          <input
            id="AddCategory"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <button type="submit">ADD POST</button>
      </Wrap>
    </form>
  );
}

export default AddPost;
