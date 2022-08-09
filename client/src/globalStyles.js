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
  button {
    margin: .5rem;
    font-size: 14px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #626564;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    .button:active {
      box-shadow: 0px 0px 0px 0px;
      top: 5px;
      left: 5px;
    }
  }
  input {
    background: #AFB9C5;
  }
  textarea {
    background: #AFB9C5;
  }
`;

export default GlobalStyle;
