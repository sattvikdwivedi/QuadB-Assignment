// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/List';
import ShowDetails from './components/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/details/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
