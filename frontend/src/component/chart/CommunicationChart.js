import React from 'react'
import { useState, useEffect } from 'react'
import { Bar,Line} from 'react-chartjs-2'
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { getCommunicationSkillData,averageCal} from './helper'

Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const CommunicationChart = () => {


  const [chartOption, setChartOption] = useState({});
  const [chartData, setChartData] = useState({
    datasets:[],
  }) 

  const avgVal = averageCal("communication_skills");
  
  
  const idealValueAnnotation = {
    type: "line",
    borderColor: "green",
    borderWidth: 1,
    scaleID: "y",
    value: 6,
    label: {
      enabled: true,
      content: "Test Label: ",
      backgroundColor: "green",
    },
  };

  const averageAnnotation = {
    type: "line",
    borderColor: "red",
    borderWidth: 1,
    scaleID: "y",
    value: avgVal,
    label: {
      enabled: true,
      content: "Average: ",
      backgroundColor: "red",
    },
    display: true,
    clamp: true,
    clip:true
  };

  const lableAnnotation = {
    type: 'label',
    xValue: 2021.5,
    yValue: avgVal,
    backgroundColor: 'red',
    height: '100px',
    width: '100px',
    borderColor: 'red',
    content: 'Average: ' + avgVal,
    font: {
      size: 12,
    }
  }


    useEffect(() => {
    setChartOption({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        title: {
          display: true,
          text: "Communication Skills",
        },
        autocolors: false,
        annotation: {
          annotations: [
            idealValueAnnotation,
            averageAnnotation,
            lableAnnotation,
          ],
        },
        datalabels: {
          display: true,
          color: "black",
          content: "avg",
        },
        scales: {
          yAxes: [
            {
              beginAtZero: true,
              max: 10,
              min: 0,
            },
          ],
        },
      },
    });
      setTimeout(() => {
        setChartData(getCommunicationSkillData());
        
      }, 1000);
    }
        , []);


  return (
    <div className="ratio ratio-16x9 my-3" style={{"maxWidth":"650px"}}>
      <Line data={chartData} plugins={[ChartDataLabels]} options={chartOption} />
    </div>
  );
}

export default CommunicationChart