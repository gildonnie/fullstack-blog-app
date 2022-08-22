// import React from "react";
//  eslint-disable no-undef 
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store'
import Posts from './components/Posts';

test('renders an array of data', () => {
  // const posts = [ _id, title, content ]
//   render(<Posts posts={[]} />);
render(
    <Provider store={store}>
      <BrowserRouter>
        <Posts posts={[]}/>
      </BrowserRouter>
    </Provider>,);
  const linkElement = screen.getByText(/JBD Blog/i);
  expect(linkElement).toBeInTheDocument();
});
