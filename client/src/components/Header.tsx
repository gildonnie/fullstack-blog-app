import React from 'react'
import styled from 'styled-components';

const HeaderWraper = styled.div`
  padding: 60px;
  text-align:start;
  background: gray;
  color: white;
  font-size: 30px;
`;


function Header() {
  return (
    <HeaderWraper>
        <h1>Fullstack-React-Blog</h1>
        <ul>
            <li> <a href=' Veiw Post'> Veiw Post</a></li>
            <li> <a href='Add Post'> Add Post</a></li>
        </ul>
    </HeaderWraper>
  )
}

export default Header 