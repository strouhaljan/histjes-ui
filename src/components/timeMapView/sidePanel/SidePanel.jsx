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
}) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"ČasoMapa"}>
      <div className="tab">
        {layers.map((layerSection, index) => (
          <>
            <LayersSection
              key={layerSection.identifier}
              section={layerSection}
              onLayerSelected={onLayerSelected}
              onLayerOpacityChange={onLayerOpacityChange}
            />
            <div className="separator" />
          </>
        ))}
        <ObjectsTimelineSlider
          enabled={objectsEnabled}
          year={objectsYear}
          min={0}
          max={2021}
          onObjectsYearChanged={onObjectsYearChanged}
          onObjectsToggle={onObjectsToggle}
        />
      </div>
    </Panel>
  );
};
