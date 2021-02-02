import React from "react";

import MapContainer from "./MapContainer";
import { ZoomControl } from "./ZoomControl";
import { ReferenceLayerSelect } from "./ReferenceLayerSelect";
import { HistorySlider } from "./HistorySlider";

export const Map = ({
  selectedBaseLayer,
  onHistoryChanged,
  onObjectClick,
  onReferenceLayerChanged,
  onZoomIn,
  onZoomOut,
}) => (
  <div>
    <div style={{ height: "100vh", width: "100%", display: "flex" }}>
      <MapContainer onObjectClick={onObjectClick} />
    </div>
    <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
    <ReferenceLayerSelect
      selectedLayer={selectedBaseLayer}
      onChanged={onReferenceLayerChanged}
    />
    <HistorySlider onChanged={onHistoryChanged} />
  </div>
);
