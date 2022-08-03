import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: #202327;
  padding: 0.8rem 1.7rem;
  width: 100%;
  position: relative;
  bottom: 0;
  padding-right: 0px;
  padding-left: 0px;
  h2 {
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <h2>
        By Jesus Quezada, Donnie Gil, Betelihem A Hayle ©
        {new Date().getFullYear()}
      </h2>
    </FooterWrapper>
  );
}

export default Footer;
