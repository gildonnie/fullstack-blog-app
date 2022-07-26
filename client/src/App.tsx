import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostData from './components/PostData';

function App() {
  return (
    <Routes>
      <Route index element={<PostData />} />
    </Routes>
  );
}

export default App;
