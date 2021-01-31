import React from "react";
import { Checkbox } from "@fluentui/react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";

const LayerCheckbox = ({ label, enabled, identifier, onChange }) => {
  const handleOnChange = (_event, checked) => {
    onChange(identifier, checked);
  };
  return <Checkbox label={label} checked={enabled} onChange={handleOnChange} />;
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
