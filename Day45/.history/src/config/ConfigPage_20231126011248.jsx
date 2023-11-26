import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ConfigPage = () => {
  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
    MAX_NUMBER: 300,
  });

  const handleSliderChange = (value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      MAX_NUMBER: value,
    }));
  };

  const renderSlider = () => (
    <Slider
      min={config.MIN_NUMBER}
      max={config.MAX_NUMBER}
      value={config.MAX_NUMBER}
      onChange={handleSliderChange}
    />
  );

  return (
    <div>
      <div>
        <label>Chọn giá trị cho MAX_NUMBER:</label>
        {renderSlider()}
      </div>
      <div>
        <p>MAX_NUMBER: {config.MAX_NUMBER}</p>
      </div>
    </div>
  );
};

export default ConfigPage;
