import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../utils/globalStyle';
import Catagory from '../components/Catagory'
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
        <Header />
        {/* <Outlet className='outlet' />
        <Footer className='footer'/> */}
          <CatagoryWrapper>
          <Outlet />
          <Catagory />
        </CatagoryWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;