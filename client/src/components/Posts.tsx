import React from 'react';
import { Post } from '../types';

function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map(({ id, title, body }: Post) => (
        <li key={id}>
          <p>{title}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
