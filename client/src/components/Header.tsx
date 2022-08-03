import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Headers = styled.div`

  display: flex;
  justify-content: space-between;
  background-color: #202327;
  .logo {
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: 25px;
  }
    ul {
      list-style: none;
      display: flex;
        li{
          margin-top: .5rem;
          margin-right: 3rem;
          font-size: 15px;
          list-style: none;
            
        }
    }
  
`;

function Header() {
  return (
    <Headers>
      <Link className="logo" to="/">JDB Blog</Link>
      <ul>
        <li>
          <Link to="/"> Veiw Posts</Link>
        </li>
        <li>
          <Link to="/addpost"> Add Post</Link>
        </li>
      </ul>
    </Headers>
  );
}

export default Header;
