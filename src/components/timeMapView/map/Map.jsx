import React from "react";

import MapContainer from "../../timeMapState/map/MapContainer";
import { ZoomControl } from "../../common/map/ZoomControl";
import { ReferenceLayerSelect } from "./ReferenceLayerSelect";
import { HistorySlider } from "./HistorySlider";
import { Help } from "./Help";

export const Map = ({
  historyYear,
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
    <ReferenceLayerSelect
      selectedLayer={selectedBaseLayer}
      onChanged={onReferenceLayerChanged}
    />
    <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
    <Help />
    <HistorySlider value={historyYear} onChanged={onHistoryChanged} />
  </div>
);
