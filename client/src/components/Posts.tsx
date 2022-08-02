import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Catagory from './Catagory';
import { Post } from '../types';

const ArticlePost = styled.article`
  border: 1px solid black;
  margin-bottom: 1rem;
`;

function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <Header />
      {posts.map(({ _id, title, content }: Post) => (
        <ArticlePost>
          <h1>
            {title}
          </h1>
          <section key={_id}>
            <p>{content}</p>
            <Link to={`/fullPost/${_id}`} state={{ ...posts }}>Read More...</Link>
          </section>
        </ArticlePost>
      ))}
      <Catagory />
      <Footer />
    </>
  );
}

export default Posts;
