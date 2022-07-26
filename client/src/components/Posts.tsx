import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types';

const ArticlePost = styled.article`
  border: 1px solid black;
  margin-bottom: 1rem;
`;
const ReadMore = styled.div`
  color: blue;
  cursor: pointer;
`;

function Posts({ posts }: { posts: Post[] }) {
  const navigate = useNavigate();
  return (
    <>
      {posts.map(({ id, title, body }: Post) => (
        <ArticlePost>
          <h1>
            {title}
          </h1>
          <section key={id}>
            <p>{body}</p>
            <ReadMore onClick={() => navigate(`/fullPost/${id}`)} onKeyPress={() => navigate(`/fullPost/${id}`)} role="button" tabIndex={0}> Read More... </ReadMore>
          </section>
        </ArticlePost>
      ))}
    </>
  );
}

export default Posts;
