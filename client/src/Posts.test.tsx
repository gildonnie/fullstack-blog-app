/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Posts from './components/Posts';

test('renders an array of data', () => {
  // const posts = [ _id, title, content ]
  render(<Posts posts={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
