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

  useEffect(() => {
    axios.get(`http://localhost:5000/blog/posts/${id}`)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [id]);

  return (
    <>
      <div>
        <form>
          <label htmlFor="Title">
            Edit
            <input
              id="Title"
              type="text"
              value={data && data.title}
            />
          </label>
          <textarea value={data && data.content} />
        </form>
      </div>
      <button type="submit">Update</button>
      <button type="submit">Delete</button>
    </>
  );
}

export default EditPage;
