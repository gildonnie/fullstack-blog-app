import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../types';

function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('Add your content here');
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
      <div>
        <label htmlFor="AddTitle">
          Add a Title:
          <input
            id="AddTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label htmlFor="AddCategory">
          Add a Category:
          <input
            id="AddCategory"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">ADD POST</button>
    </form>
  );
}

export default AddPost;
