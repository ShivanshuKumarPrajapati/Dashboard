import React from 'react';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { getProblemSolvingSkills } from './helper';

const ProblemSolvingChart = () => {

    const [psData, setPsData] = useState({
        datasets: [],
    });

    useEffect(() => {
        setTimeout(() => {
            setPsData(getProblemSolvingSkills())
        }, 1000);
    },[]);

  return (
    <div className="ratio ratio-16x9 my-3">
      <Line data={psData} />
    </div>
  );
}

export default ProblemSolvingChart