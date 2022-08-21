import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useUpdatePostMutation, useDeletePostMutation } from '../services/api';

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
  const { state } = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    setTitle(state.title);
    setContent(state.content);
    setCategory(state.category);
  }, [id, state]);

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

  const handleUpdatePost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const post = {
      id,
      title,
      content,
      category,
    };
    updatePost(post);
    navigate('/', { replace: true });
    window.location.reload(false);
  };

  const handleDeletePost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    deletePost(id);
    navigate('/', { replace: true });
    window.location.reload(false);
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
      <button type="submit" onClick={handleUpdatePost}>Update</button>
      <button type="submit" onClick={handleDeletePost}>Delete</button>
    </EditWrap>
  );
}

export default EditPage;
