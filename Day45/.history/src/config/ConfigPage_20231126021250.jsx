import React, { createContext, useState, useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ConfigContext from "./config-context";

const CustomHandle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Slider.Handle value={value} {...restProps}>
      <div
        style={{
          borderRadius: "50%",
          background: "#108ee9",
          height: 20,
          width: 20,
          cursor: "pointer",
          marginTop: -8,
          marginLeft: -8,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {value}
      </div>
    </Slider.Handle>
  );
};

const ConfigPage = () => {
  const config = useContext(ConfigContext);

  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
    MAX_NUMBER: 100,
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
      max={100}
      value={config.MAX_NUMBER}
      onChange={handleSliderChange}
      handle={CustomHandle}
    />
  );

  return (
    <ConfigContext.Provider value={config}>
      <div>
        <div>
          <label>
            Chọn khoảng từ {config.MIN_NUMBER} đến {config.MAX_NUMBER}:
          </label>
          {renderSlider()}
        </div>
        <div>
          <p>Số tối đa: {config.MAX_NUMBER}</p>
        </div>
      </div>
    </ConfigContext.Provider>
  );
};

export default ConfigPage;
