import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../types';

const EditWrap = styled.div`
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
  input {
    border-radius: 3px;
  }
}
`;
function EditPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/posts/${id}`)
      .then((response: AxiosResponse) => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setCategory(response.data.category);
      });
  }, [id]);

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setTitle(enteredName);
  };

  const changeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredName = event.target.value;
    setContent(enteredName);
  };

  const changeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setCategory(enteredName);
  };

  const updatePost = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.put<Post>(
        `http://localhost:5000/blog/posts/${id}`,
        { title: `${title}`, content: `${content}`, category: `${category}` },
      );
      navigate('/', { replace: true });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  };

  const deletePost = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.delete<Post>(
        `http://localhost:5000/blog/posts/${id}`,
      );
      navigate('/', { replace: true });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      }
      return 'An unexpected error occurred';
    }
  };

  return (
    <EditWrap>
      <form>
        <label htmlFor="Title">
          Edit
          <input
            id="Title"
            type="text"
            value={title}
            onChange={changeTitle}
          />
        </label>
        <label htmlFor="Content">
          Content
          <textarea
            id="Content"
            value={content}
            onChange={changeContent}
          />
        </label>
        <label htmlFor="Category">
          Edit
          <input
            id="Category"
            type="text"
            value={category}
            onChange={changeCategory}
          />
        </label>
      </form>
      <button type="submit" onClick={updatePost}>Update</button>
      <button type="submit" onClick={deletePost}>Delete</button>
    </EditWrap>
  );
}

export default EditPage;
