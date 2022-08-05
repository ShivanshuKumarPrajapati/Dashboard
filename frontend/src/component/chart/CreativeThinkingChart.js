import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart } from "chart.js/auto";

import { getCreativeThinkingSkills } from "./helper";

const CreativeThinkingChart = () => {
  
  const [ctData, setCtData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setCtData(getCreativeThinkingSkills());

      setChartOption({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          title: {
            display: true,
            text: "Creative Thinking Skills",
          },
          annotation: {
            annotations: 
              {
                type: "line",
                borderColor: "black",
                borderWidth: 4,             
                scaleID: "y",
                value: "8",
                label: {
                  enabled: true,
                  content: "Ideal value",
                },
              },
          }
        }
      });
    }, 1000);
  },[]);

    return <div className="ratio ratio-16x9 my-3">
      <Line data={ctData} options={chartOption } />
    </div>;
};

export default CreativeThinkingChart;
