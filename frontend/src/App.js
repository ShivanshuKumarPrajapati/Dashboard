import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        </Router>
    </React.Fragment>
  );
}

export default App;
