import React from 'react';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { getProblemSolvingSkills,averageCal } from './helper';

Chart.register(annotationPlugin);
Chart.register(ChartDataLabels);

const ProblemSolvingChart = () => {

    const [psData, setPsData] = useState({
        datasets: [],
    });
   const [chartOption, setChartOption] = useState({});

  const avgVal = averageCal("problem_solving");

  const idealValueAnnotation = {
    type: "line",
    borderColor: "green",
    borderWidth: 1,
    scaleID: "y",
    value: 7,
    label: {
      enabled: true,
      content: "ideal value: ",
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
      content: "Average: " + avgVal,
      backgroundColor: "red",
    },
  };


    useEffect(() => {
        setTimeout(() => {
          setPsData(getProblemSolvingSkills());
            setChartOption({
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "Problem_Solving Skills",
                },
                annotation: {
                  annotations: [idealValueAnnotation, averageAnnotation],
                },
                scales: {
                  y:  {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                      },
                    },
              },
            });
        }, 1000);
    },[]);

  return (
    <div className="ratio ratio-16x9 my-3" style={{ "maxWidth": "650px" }}>
      <Line data={psData} options={chartOption} />
    </div>
  );
}

export default ProblemSolvingChart