import React, { createContext, useState, useContext, useEffect } from "react";
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
  const [localConfig, setLocalConfig] = useState(globalConfig);

  const handleSliderChange = (value) => {
    setLocalConfig((prevConfig) => ({
      ...prevConfig,
      MAX_NUMBER: value,
    }));
  };

  const renderSlider = () => (
    <Slider
      min={localConfig.MIN_NUMBER}
      max={100}
      value={localConfig.MAX_NUMBER}
      onChange={handleSliderChange}
      handle={CustomHandle}
    />
  );

  useEffect(() => {
    console.log(localConfig);
    setGlobalConfig({ MAX_NUMBER: localConfig.MAX_NUMBER });
  });

  return (
    <div>
      <div>
        <label>
          Chọn khoảng từ {localConfig.MIN_NUMBER} đến {localConfig.MAX_NUMBER}:
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
