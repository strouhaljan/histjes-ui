import React from "react";
import { Slider } from "@fluentui/react";

export const HistorySlider = () => (
  <div className="history-slider">
    <Slider min={1800} max={2020} step={10} defaultValue={2000} showValue />
  </div>
);
