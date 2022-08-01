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
// const ReadMore = styled.div`
//   color: blue;
//   cursor: pointer;
// `;

function Posts({ posts }: { posts: Post[] }) {
  // const [postData, setPostData] = useState<Post[]>([]);
  // useEffect(() => {
  //   setPostData(posts);
  //   console.log(postData);
  // });
  // const navigate = useNavigate();
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
            <Link to={`/fullPost/${id}`} state={{ ...posts }}>Read More...</Link>
            {/* <ReadMore data-id={id} data-title={title} data-body={body}
            onClick={() => navigate()}
            onKeyPress={() => navigate(`/fullPost/${id}`)}
             role="button" tabIndex={0}>  </ReadMore> */}
          </section>
        </ArticlePost>
      ))}
      <Catagory />
      <Footer />
    </>
  );
}

export default Posts;
