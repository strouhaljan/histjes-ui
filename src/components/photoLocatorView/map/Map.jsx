import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { ViewSwitch } from "./ViewSwitch";
import { Map2D } from "./Map2D";
import { Map3D } from "./Map3D";

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
        ? <Map2D
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            selectedLayer={selectedBaseLayer}
            onChangeLayer={onChangeBaseLayer}
        />
        : <Map3D />
      }
      <ViewSwitch
        selectedView={selectedView}
        onChangeView={onChangeView}
      />
    </div>
  );
};
