import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  /* background-color: grey; */
  padding: 0.8rem 1.7rem;
  width: 60%;
  margin: 10px;
  h4 {
    font-family: cursive;
    color: green;
    margin: 20px;
    text-align: center;
  }
  h2 {
    /* color: blue; */
    text-align: start;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2> By Jesus Quezada,Donnie Gil,Betelihem A Hayle © {new Date().getFullYear()}</h2>
    </FooterWrapper>
  );
};

export default Footer;