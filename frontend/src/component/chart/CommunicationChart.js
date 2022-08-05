import React from 'react'
import { useState, useEffect } from 'react'
import { Bar,Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'

import { getCommunicationSkillData } from './helper'

// Chart.register(Legend, Title);

const CommunicationChart = () => {


  
  const [chartData, setChartData] = useState({
    datasets:[],
  }) 

    useEffect(() => {
    
      setTimeout(() => {
        setChartData(getCommunicationSkillData())
      }, 1000);
    }
        , []);


  return (
    <div className="ratio ratio-16x9 my-3">
      <Line data={chartData} />
    </div>
  );
}

export default CommunicationChart