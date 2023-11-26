import React, { useState } from "react";

const Config = () => {
  const [selectedValue, setSelectedValue] = useState(config.MIN_NUMBER);

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="rangeInput">Select a value:</label>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min={config.MIN_NUMBER}
        max={config.MAX_NUMBER}
        value={selectedValue}
        onChange={handleInputChange}
      />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};

const config = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 99,
  MAX_TURN: 7,
};

export { Config, config };
