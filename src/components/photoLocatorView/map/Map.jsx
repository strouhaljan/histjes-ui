import React from "react";

import MapContainer from "../../photoLocatorState/map/MapContainer";
import { ZoomControl } from "../../common/map/ZoomControl";
import { LayerSwitch } from "./LayerSwitch";
import { ViewSwitch } from "./ViewSwitch";

export const Map = ({ onZoomIn, onZoomOut }) => (
  <div className="map">
    <MapContainer />
    <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
    <LayerSwitch />
    <ViewSwitch />
  </div>
);
