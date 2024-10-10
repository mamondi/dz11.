import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Ukraine from './pages/Ukraine';
import Other from './pages/Other';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ukraine">Ukraine</Link></li>
            <li><Link to="/other">Other</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ukraine" element={<Ukraine />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
