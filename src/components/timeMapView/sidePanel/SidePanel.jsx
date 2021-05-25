import React from "react";

import { Panel } from "../../common/panel/Panel";

import { LayersSection } from "./LayersSection";

export const SidePanel = ({
  layers,
  onBackHomeClick,
  onLayerSelected,
  onLayerOpacityChange,
}) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"ČasoMapa"}>
      <div className="tab">
        {layers.map((layerSection, index) => (
          <div key={layerSection.identifier}>
            <LayersSection
              section={layerSection}
              onLayerSelected={onLayerSelected}
              onLayerOpacityChange={onLayerOpacityChange}
            />
            {index !== layers.length - 1 && <div className="separator" />}
          </div>
        ))}
      </div>
    </Panel>
  );
};
