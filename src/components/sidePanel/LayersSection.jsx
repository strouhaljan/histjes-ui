import React from "react";
import { Stack } from "@fluentui/react";

import { Layer } from "./Layer";

const stackTokens = { childrenGap: ".5rem" };

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
          <Layer
            identifier={identifier}
            name={name}
            enabled={enabled}
            opacity={opacity}
            onLayerSelected={onLayerSelected}
            onLayerOpacityChange={onLayerOpacityChange}
          />
        ))}
      </Stack>
    </div>
  );
};
