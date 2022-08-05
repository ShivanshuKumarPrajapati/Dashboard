import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {Chart} from 'chart.js'
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { getCreativeThinkingSkills, averageCal } from "./helper";


Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const CreativeThinkingChart = () => {
  
  const [ctData, setCtData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});

  const avgVal = averageCal("creative_thinking");

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
      content: "Average: "+ avgVal,
      backgroundColor: "red",
    },
  };


  useEffect(() => {
     setChartOption({
       responsive: true,
       maintainAspectRatio: true,
       plugins: {
         title: {
           display: true,
           text: "Creative Thinking Skills",
         },
         annotation: {
           annotations: [idealValueAnnotation, averageAnnotation],
         },
         scales: {
           yAxes: [
             {
               ticks: {
                 beginAtZero: true,
                 endAt:10,
                 max: 10,
                 min: 0,
               },
             },
           ],
         },
       },
     });
    
    setTimeout(() => {
      setCtData(getCreativeThinkingSkills());

     
    }, 1000);
  },[]);

    return (
      <div className="ratio ratio-16x9 my-3" style={{ "maxWidth": "650px" }}>
        <Line data={ctData} options={chartOption} />
      </div>
    );
};

export default CreativeThinkingChart;
