import React from "react";

import MapContainer2D from "../../photoLocatorState/map/MapContainer2D";
import { ZoomControl } from "../../common/ZoomControl/ZoomControl";
import { LayerSwitch } from "./LayerSwitch";

export const Map2D = ({
  selectedLayer,
  onChangeLayer,
  onZoomIn,
  onZoomOut,
}) => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", display: "flex" }}>
        <MapContainer2D />
      </div>
      <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
      <LayerSwitch
        selectedLayer={selectedLayer}
        onChangeLayer={onChangeLayer}
      />
    </>
  );
};
