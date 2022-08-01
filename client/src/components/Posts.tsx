import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Post } from '../types';
import Catagory from './Catagory';
import Footer from './Footer';

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
          <Link
            to={`/fullpost/${id}`}
            state={{
              id,
              title,
              body,
            }}
          >
            <h1>
              {title}
            </h1>
            <section key={id}>
              <p>{body}</p>
              <ReadMore onClick={() => navigate(`/fullpost/${id}`)} onKeyPress={() => navigate(`/fullpost/${id}`)} role="button" tabIndex={0}> Read More... </ReadMore>
            </section>
          </Link>
        </ArticlePost>
      ))}
      <Catagory />
      < Footer />
    </>
  );
}

export default Posts;
