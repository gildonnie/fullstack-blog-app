import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostData from './components/PostData';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      
      <Route index element={<Header/>} />
      <Route index element={<PostData />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
