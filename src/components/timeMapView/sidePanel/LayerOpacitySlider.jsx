import React, { useCallback, useState } from "react";
import { Slider } from "@fluentui/react";

export const LayerOpacitySlider = ({
  layerId,
  onChanged,
  opacity: defaultOpacity,
}) => {
  const [value, setValue] = useState(defaultOpacity, [defaultOpacity]);
  const onChangeHandler = useCallback((_event, opacity) => {
    setValue(opacity);
    onChanged(layerId, opacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="layer-slider-wrapper">
      <Slider
        className={"histjes-map-panel-checkbox-slider"}
        showValue={false}
        min={0}
        max={100}
        value={value}
        styles={{
          root: { width: "8rem" },
          slideBox: { padding: 0 },
        }}
        onChanged={onChangeHandler}
      />
    </div>
  );
};
