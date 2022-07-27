import React, { useEffect } from 'react';

type FullPostProps = {
  id: number;
  title: string;
  body: string;
}

function fullPost({ id, title, body }: FullPostProps) {
  useEffect(() => {
    console.log(id, title, body);
  }, []);

  return (
    <div>fullPost</div>
  );
}

export default fullPost;
