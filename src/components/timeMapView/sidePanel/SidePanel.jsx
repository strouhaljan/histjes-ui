import React from "react";

import { Panel } from "../../common/panel/Panel";

import { LayersSection } from "./LayersSection";
import { ObjectsTimelineSlider } from "./ObjectsTimelineSlider";

export const SidePanel = ({
  layers,
  onBackHomeClick,
  onLayerSelected,
  onLayerOpacityChange,
  onObjectsYearChanged,
  objectsYear,
  onObjectsToggle,
  objectsEnabled,
  showObjectWithoutDate,
  onShowObjectsWithoutDateChanged,
}) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"ČasoMapa"}>
      <div className="tab">
        {layers.map((layerSection) => (
          <div key={layerSection.identifier}>
            <LayersSection
              section={layerSection}
              onLayerSelected={onLayerSelected}
              onLayerOpacityChange={onLayerOpacityChange}
            />
            <div className="separator" />
          </div>
        ))}
        <ObjectsTimelineSlider
          enabled={objectsEnabled}
          year={objectsYear}
          onObjectsYearChanged={onObjectsYearChanged}
          onObjectsToggle={onObjectsToggle}
          showObjectWithoutDate={showObjectWithoutDate}
          onShowObjectsWithoutDateChanged={onShowObjectsWithoutDateChanged}
        />
      </div>
    </Panel>
  );
};
