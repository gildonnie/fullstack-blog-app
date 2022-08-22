import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    color: #EFF3F4;
    font-family: 'Playfair Display', serif;
    a{
      text-decoration: none;
      color: #EFF3F4
    }
  }
  input {
    background-color: black;
    border: solid 1px gray;
    margin-left: 10px;
    color: white;
  }
  textarea {
    background-color: #202327;
    border: solid 1px  black;
    color: white;
  }
  button {
    background: black;
    color: #5d858f;
    border: solid 1px gray;
    border-radius: 6px;
    padding: px;

  }
`;

export default GlobalStyle;
