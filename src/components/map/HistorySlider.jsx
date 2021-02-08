import React from "react";
import { Slider } from "@fluentui/react";

export const HistorySlider = ({ value, onChanged }) => {
  const handleOnChanged = (_event, value) => onChanged(value);
  return (
    <div className="history-slider">
      <Slider
        min={1800}
        max={2020}
        step={10}
        value={value}
        showValue
        onChanged={handleOnChanged}
      />
    </div>
  );
};
