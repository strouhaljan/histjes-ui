import React, { useMemo } from "react";

import { ViewSwitch } from "./ViewSwitch";
import { Map2D } from "./Map2D";
import { Map3D } from "./Map3D";

import { getMapStyles } from "./styles";

export const Map = ({
  selectedBaseLayer,
  selectedView,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut,
  onMoveForward,
  onMoveBack,
}) => {
  const styles = useMemo(() => getMapStyles(), []);

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
        <Map3D onMoveBack={onMoveBack} onMoveForward={onMoveForward} />
      )}
      <ViewSwitch selectedView={selectedView} onChangeView={onChangeView} />
    </div>
  );
};
