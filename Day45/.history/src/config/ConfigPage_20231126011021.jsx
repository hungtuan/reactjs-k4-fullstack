import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ConfigPage = () => {
  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
    MAX_NUMBER: 1000,
  });

  const handleSliderChange = (value) => {
    setConfig({
      ...config,
      MAX_NUMBER: value,
    });
  };

  return (
    <div>
      <div>
        <label>Chọn giá trị cho MAX_NUMBER:</label>
        <Slider
          min={config.MIN_NUMBER}
          max={config.MAX_NUMBER}
          value={config.MAX_NUMBER}
          onChange={handleSliderChange}
        />
      </div>
      <div>
        <p>MAX_NUMBER: {config.MAX_NUMBER}</p>
      </div>
    </div>
  );
};

export default ConfigPage;
