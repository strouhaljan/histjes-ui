import React from "react";

import { ObjectDetailPanel } from "../common/ObjectDetailPanel";
import { SidePanel } from "./sidePanel/SidePanel";
import { Map } from "./map/Map";

import "./styles.scss";

export const View = ({
  onReferenceLayerChanged,
  onZoomIn,
  onZoomOut,
  onLayerSelected,
  onBackHomeClick,
  onLayerOpacityChange,
  onDetailCancel,
  onObjectClick,
  selectedObject,
  selectedBaseLayer,
  layers,
  objectsYear,
  objectsEnabled,
  onObjectsYearChanged,
  onObjectsToggle,
  imgBaseUrlFull,
  imgBaseUrlPreview,
  showObjectWithoutDate,
  onShowObjectsWithoutDateChanged,
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
          objectsYear={objectsYear}
          onObjectsYearChanged={onObjectsYearChanged}
          objectsEnabled={objectsEnabled}
          onObjectsToggle={onObjectsToggle}
          showObjectWithoutDate={showObjectWithoutDate}
          onShowObjectsWithoutDateChanged={onShowObjectsWithoutDateChanged}
        />
      </div>
      <div className="histjes-map">
        <Map
          selectedBaseLayer={selectedBaseLayer}
          onObjectClick={onObjectClick}
          onReferenceLayerChanged={onReferenceLayerChanged}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
      <ObjectDetailPanel
        object={selectedObject}
        onClose={onDetailCancel}
        isBlocking={false}
        isLightDismiss={false}
        imgBaseUrlFull={imgBaseUrlFull}
        imgBaseUrlPreview={imgBaseUrlPreview}
      />
    </div>
  );
};
