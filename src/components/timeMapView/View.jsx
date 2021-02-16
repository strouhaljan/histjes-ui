import React from "react";

import { SidePanel } from "./sidePanel/SidePanel";
import { Map } from "./map/Map";

import "./styles.scss";

export const View = ({
  onHistoryChanged,
  onReferenceLayerChanged,
  onZoomIn,
  onZoomOut,
  onLayerSelected,
  onBackHomeClick,
  onLayerOpacityChange,
  onDetailCancel,
  selectedObject,
  selectedBaseLayer,
  layers,
}) => {
  return (
    <div className="histjes-main">
      <div className="histjes-map">
        <Map
          selectedBaseLayer={selectedBaseLayer}
          onHistoryChanged={onHistoryChanged}
          onReferenceLayerChanged={onReferenceLayerChanged}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
      <div className="histjes-panel">
        <SidePanel
          layers={layers}
          onBackHomeClick={onBackHomeClick}
          onLayerSelected={onLayerSelected}
          onLayerOpacityChange={onLayerOpacityChange}
          selectedObject={selectedObject}
          onDetailCancel={onDetailCancel}
        />
      </div>
    </div>
  );
};
