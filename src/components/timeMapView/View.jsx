import React from "react";

import { ObjectDetailPanel } from "../common/ObjectDetailPanel";
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
  onObjectClick,
  onTabClick,
  historyYear,
  selectedObject,
  selectedBaseLayer,
  layers,
  selectedTab,
}) => {
  return (
    <div className="histjes-main">
      <div className="histjes-panel">
        <SidePanel
          layers={layers}
          onBackHomeClick={onBackHomeClick}
          onLayerSelected={onLayerSelected}
          onLayerOpacityChange={onLayerOpacityChange}
          selectedObject={selectedObject}
          onDetailCancel={onDetailCancel}
          onTabClick={onTabClick}
          selectedTab={selectedTab}
        />
      </div>
      <div className="histjes-map">
        <Map
          historyYear={historyYear}
          selectedBaseLayer={selectedBaseLayer}
          onHistoryChanged={onHistoryChanged}
          onObjectClick={onObjectClick}
          onReferenceLayerChanged={onReferenceLayerChanged}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
      <ObjectDetailPanel object={selectedObject} onClose={() => {}} />
    </div>
  );
};
