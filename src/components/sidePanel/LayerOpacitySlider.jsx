import React from "react";
import { Slider } from "@fluentui/react";

export const LayerOpacitySlider = ({ layerId, onChanged, opacity }) => {
  const onChangeHandler = (_event, opacity) => {
    onChanged(layerId, opacity);
  };

  return (
    <div className="layer-slider-wrapper">
      <Slider
        className={"histjes-map-panel-checkbox-slider"}
        showValue={false}
        min={0}
        max={100}
        value={opacity}
        styles={{
          root: { width: "8rem" },
          slideBox: { padding: 0 },
        }}
        onChanged={onChangeHandler}
      />
    </div>
  );
};
