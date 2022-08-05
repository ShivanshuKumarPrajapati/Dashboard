import React from 'react'
import { useParams,Link } from 'react-router-dom'
import {useState, useEffect } from 'react';

import { filterData } from './helper'
import CommunicationChart from './CommunicationChart';
import CreativeThinkingChart from './CreativeThinkingChart';
import ProblemSolvingChart from './ProblemSolvingChart';

const Chart = () => {

    const { userId } = useParams();
    const [countUser,setCountUser] = useState(0);

    useEffect(() => {
        filterData(userId).then((data) => {
            setCountUser(data);
        }).catch((err) => console.log(err));
        
    }
        , []);
    
  return (
    <div className="container">
      <Link to="/">
        <button
          className="btn btn-primary"
        >
          Back
        </button>
      </Link>
      {countUser > 0 ? (<div className="d-flex flex-column justify-content-between align-content-center flex-wrap">
        <ProblemSolvingChart />
        <CommunicationChart />
        <CreativeThinkingChart />
          </div>) : (
                  <div className='text-center mt-5'>
                      <h1>User Data doesn't exist</h1>
                      <p>Please add user's data</p>
                  </div>
      )}
    </div>
  );
}

export default Chart