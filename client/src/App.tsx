import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Layout from './pages/Layout';
import FullPost from './pages/fullPost';
import NotFound from './pages/NotFound';
import AddPostPage from './pages/AddPostPage';
import Header from './components/Header';
import EditPage from './pages/EditPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/fullPost/:id" element={<FullPost />} />
        <Route path="/addpost" element={<AddPostPage />} />
        <Route path="/editpage/:id" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
