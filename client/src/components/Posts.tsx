import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Category from './Category';
// import { Post } from '../types';
import { useGetPostsQuery } from '../services/api';
import backgroundImg from './IMGs/background.jpg';

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
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
  text-align: center;  
  position: relative;
  h1 {
    font-family: 'Cutive Mono', monospace;
  }
  .readmore {
    display: felx;
    justify-content: center;

    a {
      bottom: 0;
      margin-bottom: 1rem;
      position: absolute;
    }
    
  }
  a {
    color: #5d858f;
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
function Posts() {
  const { data, error, isLoading } = useGetPostsQuery(undefined);
  return (
    <>
      <BackIMG><h1>JBD Blog</h1></BackIMG>
      <PostWrapper>
        <WrapperPost>
          { data ? (data.posts.map(({ _id, title, content }) => (
            <ArticlePost>
              <h1>
                <Link to={`/editpage/${_id}`} state={{ ...data.posts }}>
                  {title}
                </Link>
              </h1>
              <section className="readmore" key={_id}>
                <p>
                  {content.slice(0, 200)}
                  ...
                </p>
                <Link to={`/fullPost/${_id}`} state={{ ...data.posts }}>Read More...</Link>
              </section>
            </ArticlePost>
          ))) : null}
        </WrapperPost>
        {/* <Category /> */}
      </PostWrapper>
    </>
  );
}

export default Posts;
