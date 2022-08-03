import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Catagory from './Catagory';
import { Post } from '../types';
import Footer from './Footer';

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const ArticlePost = styled.article`
  margin-left: 20rem;
  margin-top: 1rem;
  max-width: 90%;
  border: 1px solid black;
  margin-bottom: 1rem;
  text-decoration: none;
  text-align: center;
  a:link { 
    text-decoration: none;
  }
`;
function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <PostWrapper>
        <div>
          {posts.map(({ _id, title, content }: Post) => (

            <ArticlePost>
              <h1>
                <Link to={`/editpage/${_id}`} state={{ ...posts }}>
                  {title}
                </Link>
              </h1>
              <section key={_id}>
                <p>{content}</p>
                <Link to={`/fullPost/${_id}`} state={{ ...posts }}>Read More...</Link>
              </section>
            </ArticlePost>
          ))}
        </div>
        <Catagory />
      </PostWrapper>
      <Footer />

    </>
  );
}

export default Posts;
