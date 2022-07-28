import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddPostPage from './pages/AddPostPage';
import PostDetails from './pages/PostDetails';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpost" element={<AddPostPage />} />
        <Route path="/fullpost/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
