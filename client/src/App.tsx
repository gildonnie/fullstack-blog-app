import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostData from './components/PostData';
// import Layout from './pages/Layout';
import FullPost from './pages/fullPost';
import NotFound from './pages/NotFound';
import AddPostPage from './components/AddPost';

// run this command first: json-server --watch posts.json
// then run this command second: npm start
// It should prompt you to start a new port. Enter Y / Yes

function App() {
  return (
    <Routes>
      <Route index element={<PostData />} />
      <Route path="/fullPost/:id" element={<FullPost />} />
      <Route path="/addpost" element={<AddPostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
