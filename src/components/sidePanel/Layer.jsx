import React, { useState } from "react";
import { Checkbox } from "@fluentui/react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";

const LayerCheckbox = ({ label, enabled, identifier, onChange }) => {
  const [checked, setChecked] = useState(enabled, [enabled]);
  const handleOnChange = (_event, isChecked) => {
    setChecked(isChecked);
    onChange(identifier, isChecked);
  };
  return <Checkbox label={label} checked={checked} onChange={handleOnChange} />;
};

export const Layer = ({
  onLayerSelected,
  onLayerOpacityChange,
  identifier,
  name,
  enabled,
  opacity,
}) => (
  <div>
    <LayerCheckbox
      identifier={identifier}
      label={name}
      enabled={enabled}
      onChange={onLayerSelected}
    />
    {enabled && (
      <LayerOpacitySlider
        layerId={identifier}
        opacity={opacity}
        onChanged={onLayerOpacityChange}
      />
    )}
  </div>
);
