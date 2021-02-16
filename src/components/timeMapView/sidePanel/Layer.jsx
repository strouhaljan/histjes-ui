import React, { useState } from "react";
import { Checkbox } from "@fluentui/react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";

const LayerCheckbox = ({ label, checked, onChange }) => (
  <Checkbox label={label} checked={checked} onChange={onChange} />
);

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
      <LayerCheckbox
        identifier={identifier}
        label={name}
        checked={checked}
        onChange={handleOnChange}
      />
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
