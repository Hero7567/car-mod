import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ModifyPage from './pages/ModifyCar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modify/:id" element={<ModifyPage />} />
      </Routes>
    </Router>
  );
}

export default App;


