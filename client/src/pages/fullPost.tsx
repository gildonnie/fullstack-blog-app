import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const FullPost = styled.div`
  text-align: center;
  // border: 1px solid gray;
  max-width: 75%;
  margin: auto;
  margin-top: 3rem;
  background: #202327;
  p {

  }
`;

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
        console.log(response.data);
        setData(response.data);
      });
  }, [id]);

  return (
    <FullPost>
      <h1>{data && data.title}</h1>
      <p>{data && data.content}</p>
      <p>{ data && data.category }</p>
    </FullPost>
  );
}

export default fullPost;
