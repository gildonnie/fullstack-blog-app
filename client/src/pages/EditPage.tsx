import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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

type PostData = {
  id: number;
  title: string;
  content: string;
  category?: string;
}

function EditPage() {
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
    <form>
      <EditWrap>
        <label htmlFor="Title">
          Edit
          <input
            id="Title"
            type="text"
            value={data && data.title}
          />
        </label>
        <textarea value={data && data.content} />
        <button type="submit">Update</button>
        <button type="submit">Delete</button>
      </EditWrap>
    </form>
  );
}

export default EditPage;
