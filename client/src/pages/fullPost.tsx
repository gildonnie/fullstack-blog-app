import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type PostData = {
  id: number;
  title: string;
  content: string;
  category?: string;
}

function fullPost() {
  const { id } = useParams();
  const [data, setData] = useState<PostData>();

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/posts/${id}`)
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>{data && data.title}</h1>
      <p>{data && data.content}</p>
      <p>{ data && data.category }</p>
    </div>
  );
}

export default fullPost;
