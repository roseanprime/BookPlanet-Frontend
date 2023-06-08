import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Bootstrap = () => {
  const gradientColors = ["blue", "red", "green", "pink"];
  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
  };
  
  return <div style={gradientStyle}></div>;
};

export default Bootstrap;
