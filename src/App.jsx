import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Main from './components/main';
import Form from './components/Form';

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
