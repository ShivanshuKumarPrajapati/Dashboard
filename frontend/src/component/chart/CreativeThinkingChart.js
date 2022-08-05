import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import { getCreativeThinkingSkills } from "./helper";

const CreativeThinkingChart = () => {
  const [ctData, setCtData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setCtData(getCreativeThinkingSkills());
    }, 1000);
  },[]);

    return <div className="ratio ratio-16x9 my-3">
    <Line data={ctData} />
    </div>;
};

export default CreativeThinkingChart;
