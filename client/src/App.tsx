import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Layout from './pages/Layout';
import FullPost from './pages/fullPost';
import NotFound from './pages/NotFound';
import AddPostPage from './pages/AddPostPage';
import Header from './components/Header';
import EditPage from './pages/EditPage';

// run this command first: json-server --watch posts.json
// then run this command second: npm start
// It should prompt you to start a new port. Enter Y / Yes

function App() {
  return (
    <>
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
