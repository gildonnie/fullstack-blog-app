import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Post } from '../types';

function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('Add your bodys content here');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post<Post>(
        'http://localhost:3000/posts',
        { id: uuidv4(), title: `${title}`, body: `${body}` },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      console.log(JSON.stringify(data, null, 4));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      }
      console.log('unexpected error: ', error);
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
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">ADD POST</button>
    </form>
  );
}

export default AddPost;
