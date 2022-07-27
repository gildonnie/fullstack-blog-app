import React from 'react';
import styled from 'styled-components';

const Headers = styled.div`

  display: flex;
  justify-content: space-between;
  background-color: gray;
    ul {
      list-style: none;
      display: flex;
        li{
          margin-top: .5rem;
          margin-right: 3rem;
          font-size: 27px;
          list-style: none;
            a{
              text-decoration: none;
            }
        }
    }
  
`;

function Header() {
  return (
    <Headers>
      <h1>Fullstack-React-Blog</h1>
      <ul>
        <li>
          <a href=" Veiw Post"> Veiw Post</a>
        </li>
        <li>
          <a href="Add Post"> Add Post</a>
        </li>
      </ul>
    </Headers>
  );
}

export default Header;
