import React, { createContext, useState, useContext, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import CountReducer from "../store/countContext/CountReducer";

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
  const [localConfig, setLocalConfig] = useState({
    MAX_NUMBER: 2,
    MIN_NUMBER: 1,
    MAX_TURN: 7,
  });

  console.log(localConfig);

  const handleSliderChange = (value) => {
    setLocalConfig((prevConfig) => ({
      ...prevConfig,
      MAX_NUMBER: value,
    }));
    localStorage.setItem("MAX_NUMBER", JSON.stringify(value));
  };

  let maxValue = localStorage.getItem("MAX_NUMBER")
    ? +localStorage.getItem("MAX_NUMBER")
    : 100;

  console.log(maxValue);

  const renderSlider = () => (
    <Slider
      min={2}
      max={100}
      value={maxValue}
      onChange={handleSliderChange}
      handle={CustomHandle}
    />
  );

  return (
    <div>
      <div>
        <label>
          Chọn khoảng từ {localConfig.MIN_NUMBER} đến {maxValue}:
        </label>
        {renderSlider()}
      </div>
      <div>
        <p>Số tối đa: {localConfig.MAX_NUMBER}</p>
      </div>
    </div>
  );
};

export default ConfigPage;
