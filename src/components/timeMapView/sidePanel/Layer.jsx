import React, { useState } from "react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";
import { LayerCheckbox } from "./LayerCheckbox";

export const Layer = ({
  onLayerSelected,
  onLayerOpacityChange,
  identifier,
  name,
  enabled,
  opacity,
}) => {
  const [checked, setChecked] = useState(enabled, [enabled]);
  const handleOnChange = (_event, isChecked) => {
    setChecked(isChecked);
    onLayerSelected(identifier, isChecked);
  };

  return (
    <div>
      <LayerCheckbox label={name} checked={checked} onChange={handleOnChange} />
      {checked && (
        <LayerOpacitySlider
          layerId={identifier}
          opacity={opacity}
          onChanged={onLayerOpacityChange}
        />
      )}
    </div>
  );
};
