import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Catagory from './Catagory';
import { Post } from '../types';
import Footer from './Footer';
import backgroundImg from './IMGs/background.jpg';

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  margin-bottom: 1rem;
`;
const ArticlePost = styled.article`
  background: #202327;
  margin-left: 5rem;
  margin-top: 2rem;
  min-width: 20rem;
  min-height: 20rem;
  border: 1px solid #2F3336;
  margin-bottom: 1rem;
  text-decoration: none;
  text-align: center;  
  h1 {
    font-family: 'Cutive Mono', monospace;
  }
`;
const BackIMG = styled.div`
  background-image: url(${backgroundImg});
  min-height: 980px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  h1 {
    margin-top: 0;
    padding-top 23rem;
    font-size: 60px;
    font-family: 'Cutive Mono', monospace;
  }
`;
const WrapperPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;
function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <BackIMG><h1>JBD Blog</h1></BackIMG>
      <PostWrapper>
        <WrapperPost>
          {posts.map(({ _id, title, content }: Post) => (

            <ArticlePost>
              <h1>
                <Link to={`/editpage/${_id}`} state={{ ...posts }}>
                  {title}
                </Link>
              </h1>
              <section key={_id}>
                <p>
                  {content.slice(0, 200)}
                  ...
                </p>
                <Link to={`/fullPost/${_id}`} state={{ ...posts }}>Read More...</Link>
              </section>
            </ArticlePost>
          ))}
        </WrapperPost>
        <Catagory />
      </PostWrapper>
      <Footer />
    </>
  );
}

export default Posts;
