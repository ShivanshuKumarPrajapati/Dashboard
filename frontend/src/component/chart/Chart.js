import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

import { filterData } from './helper'
import CommunicationChart from './CommunicationChart';
import CreativeThinkingChart from './CreativeThinkingChart';
import ProblemSolvingChart from './ProblemSolvingChart';

const Chart = () => {

    const { userId } = useParams();

    useEffect(() => {
        filterData(userId);
    }
        , []);
    
  return (
      <div className='container'>
          <div className="d-flex justify-content-between align-content-center flex-wrap">
          <ProblemSolvingChart />
          <CommunicationChart />
          <CreativeThinkingChart/>
          </div>
      </div>
  )
}

export default Chart