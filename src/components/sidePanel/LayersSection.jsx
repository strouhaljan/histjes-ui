import React from "react";
import { Stack, Checkbox } from "@fluentui/react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";

const stackTokens = { childrenGap: ".5rem" };

const LayerCheckbox = ({ label, enabled, identifier, onChange }) => {
  const handleOnChange = (_event, checked) => {
    onChange(identifier, checked);
  };
  return <Checkbox label={label} checked={enabled} onChange={handleOnChange} />;
};

export const LayersSection = ({
  section,
  onLayerSelected,
  onLayerOpacityChange,
}) => {
  const { name, layers } = section;

  return (
    <div>
      <h4>{name}</h4>
      <Stack className="checkbox-stack-inner" tokens={stackTokens}>
        {layers.map(({ name, identifier, enabled, opacity }) => (
          <div key={identifier}>
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
        ))}
      </Stack>
    </div>
  );
};
