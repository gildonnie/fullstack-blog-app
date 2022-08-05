import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type PostData = {
  id: number;
  title: string;
  content: string;
  category?: string;
}

function EditPage() {
  const { id } = useParams();
  const [data, setData] = useState<PostData>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/posts/${id}`)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setData(response.data);
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

  return (
    <>
      <div>
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
      </div>
      <button type="submit">Update</button>
      <button type="submit">Delete</button>
    </>
  );
}

export default EditPage;
