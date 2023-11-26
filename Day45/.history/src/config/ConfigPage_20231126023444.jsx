import React, { createContext, useState, useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { setGlobalConfig, globalConfig } from "./config-context";

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
  const handleSliderChange = (value) => {
    console.log("New MAX_NUMBER:", value);
    setGlobalConfig({ MAX_NUMBER: value });
  };

  const renderSlider = () => (
    <Slider
      min={globalConfig.MIN_NUMBER}
      max={100}
      value={globalConfig.MAX_NUMBER}
      onChange={handleSliderChange}
      handle={CustomHandle}
    />
  );

  return (
    <div>
      <div>
        <label>
          Chọn khoảng từ {globalConfig.MIN_NUMBER} đến {globalConfig.MAX_NUMBER}
          :
        </label>
        {renderSlider()}
      </div>
      <div>
        <p>Số tối đa: {globalConfig.MAX_NUMBER}</p>
      </div>
    </div>
  );
};

export default ConfigPage;
