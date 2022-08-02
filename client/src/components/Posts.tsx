import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Catagory from './Catagory';
import { Post } from '../types';
import Footer from './Footer';

const ArticlePost = styled.article`
  border: 1px solid black;
  margin-bottom: 1rem;
  text-decoration: none;
  a:link { 
    text-decoration: none;
  }
`;
const PostWrapper = styled.div`
  
    
`;
function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <PostWrapper>
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
        <Catagory />
      </PostWrapper>
      <Footer />

    </>
  );
}

export default Posts;
