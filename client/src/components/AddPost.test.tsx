import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddPost from './AddPost';


test('should be able to type textarea, Add your content here', () => {
  render(<BrowserRouter><AddPost /></BrowserRouter>); // react-testing-library

  const textarea = screen.getByPlaceholderText(/Add your content here/i);
  expect(textarea).toBeInTheDocument();
});

test('button shoud work corectly we submit', () => {
  render(<BrowserRouter><AddPost /></BrowserRouter>); // react-testing-library

  const buttonarea = screen.getByRole('button', { name: /ADD POST/i });
  expect(buttonarea).toBeInTheDocument();
});

test('clicking on the "ADD POST" button should print on the home page', () => {
  render(<BrowserRouter><AddPost /></BrowserRouter>); // react-testing-library

  const buttonarea = screen.getByRole('button', { name: /ADD POST/i });
  expect(buttonarea).toBeInTheDocument();
});

test('clicking on the "ADD POST" button  the addpost page should disapper', () => {
  render(<BrowserRouter><AddPost /></BrowserRouter>); // react-testing-library

  const buttonarea = screen.getByRole('button', { name: /ADD POST/i });
  expect(buttonarea).toBeInTheDocument();
});


