import React, { useMemo } from "react";

import { ViewSwitch } from "./ViewSwitch";
import { Map2D } from "./Map2D";
import { Map3D } from "./Map3D";

import { getStyles } from "./styles";

export const Map = ({
  calculatedCameraParams,
  selectedBaseLayer,
  selectedView,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut,
  onSetAdjusted,
  onMoveToAdjusted,
  onMoveToCalculated,
}) => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div className={styles.map}>
      {selectedView === "2D" ? (
        <Map2D
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
          selectedLayer={selectedBaseLayer}
          onChangeLayer={onChangeBaseLayer}
        />
      ) : (
        <Map3D
          calculatedCameraParams={calculatedCameraParams}
          onSetAdjusted={onSetAdjusted}
          onMoveToAdjusted={onMoveToAdjusted}
          onMoveToCalculated={onMoveToCalculated}
        />
      )}
      <ViewSwitch selectedView={selectedView} onChangeView={onChangeView} />
    </div>
  );
};
