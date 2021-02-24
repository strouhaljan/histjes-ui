import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import MapContainer from "../../photoLocatorState/map/MapContainer";
import { ZoomControl } from "../../common/map/ZoomControl";
import { LayerSwitch } from "./LayerSwitch";
import { ViewSwitch } from "./ViewSwitch";

import getStyles from "./styles";

export const Map = ({
  selectedBaseLayer,
  selectedView,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.map}>
      {(selectedView === '2D')
        ? <>
          <div style={{ height: "100vh", width: "100%", display: "flex" }}>
            <MapContainer
              selectedLayer={selectedBaseLayer}
            />
          </div>
          <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
          <LayerSwitch
            selectedLayer={selectedBaseLayer}
            onChangeLayer={onChangeBaseLayer}
          />
        </>
        : <>
          <div style={{ height: "100vh", width: "100%", display: "flex" }}>
            3D
          </div>
        </>
      }
      <ViewSwitch
        selectedView={selectedView}
        onChangeView={onChangeView}
      />
    </div>
  );
};
