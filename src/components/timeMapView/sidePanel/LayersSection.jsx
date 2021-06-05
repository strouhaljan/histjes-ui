import React, { useMemo } from "react";
import { Stack } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Layer } from "./Layer";
import getStyles from "./styles";

const stackTokens = { childrenGap: ".75rem" };

export const LayersSection = ({
  section,
  onLayerSelected,
  onLayerOpacityChange,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const { name, layers } = section;

  return (
    <div>
      <h4>{name}</h4>
      <Stack className={styles.layersWrapper} tokens={stackTokens}>
        {layers.map(({ name, identifier, enabled, opacity }) => (
          <Layer
            key={`layer_${identifier}`}
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
