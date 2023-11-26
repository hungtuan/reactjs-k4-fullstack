import React from "react";

import { setMaxNumber } from "../redux/actions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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

const ConfigPage = ({ localConfig, setMaxNumber }) => {
  const handleSliderChange = (value) => {
    setMaxNumber(value);
  };

  const renderSlider = () => (
    <Slider
      min={1}
      max={100}
      value={localConfig.MAX_NUMBER}
      onChange={handleSliderChange}
      handle={CustomHandle}
    />
  );

  return (
    <div>
      <div>
        <label>
          Chọn khoảng từ {localConfig.MIN_NUMBER} đến {localConfig.MAX_NUMBER}:
        </label>
        {renderSlider()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  localConfig: state,
});

const mapDispatchToProps = {
  setMaxNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage);
