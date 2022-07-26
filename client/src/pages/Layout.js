import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../utils/globalStyle';

import Footer from '../Component/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper className='wrapper'>
        <Header className='header'/>
        <Outlet className='outlet' />
        <Footer className='footer'/>
      </Wrapper>
    </>
  );
};

export default Layout;