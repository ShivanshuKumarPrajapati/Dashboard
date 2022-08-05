import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './component/Header';
import Home from './component/Home';
import Chart from './component/chart/Chart';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/userData/:userId" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
