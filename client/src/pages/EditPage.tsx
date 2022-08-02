import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type PostData = {
  id: number;
  body: string;
  title: string;
}

function EditPage() {
  const { id } = useParams();
  const [data, setData] = useState<PostData>();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [id]);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  });
  return (
    <div>editpage </div>
  );
}

export default EditPage;
