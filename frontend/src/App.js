import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Header from './component/Header';
import Home from './component/Home';
import Chart from './component/chart/Chart';


function App() {

  const [users, setUsers] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);
  
  return (
    <React.Fragment>
      <Router>
        <Header users={users} setUsers={setUsers}
         searchFlag={searchFlag} setSearchFlag={setSearchFlag} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home users={users} setUsers={setUsers} searchFlag={searchFlag} setSearchFlag={setSearchFlag} />}
            />
            <Route path="/userData/:userId" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
