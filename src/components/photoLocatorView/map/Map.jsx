import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import MapContainer from "../../photoLocatorState/map/MapContainer";
import { ZoomControl } from "../../common/map/ZoomControl";
import { LayerSwitch } from "./LayerSwitch";
import { ViewSwitch } from "./ViewSwitch";

import getStyles from "./styles";

export const Map = ({ onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.map}>
      <MapContainer />
      <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
      <LayerSwitch />
      <ViewSwitch />
    </div>
  );
};
