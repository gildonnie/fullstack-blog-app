import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
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
  // const [postData, setPostData] = useState<Post[]>([]);
  // useEffect(() => {
  //   setPostData(posts);
  //   console.log(postData);
  // });
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {posts.map(({ id, title, body }: Post) => (
        <ArticlePost>
          <h1>
            {title}
          </h1>
          <section key={id}>
            <p>{body}</p>
            <ReadMore data-id={id} data-title={title} data-body={body} onClick={() => navigate(`/fullPost/${id}`)} onKeyPress={() => navigate(`/fullPost/${id}`)} role="button" tabIndex={0}> Read More... </ReadMore>
          </section>
        </ArticlePost>
      ))}
    </>
  );
}

export default Posts;
