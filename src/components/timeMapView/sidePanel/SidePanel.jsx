import React from "react";
import { PivotItem, Pivot } from "@fluentui/react";

import { Panel } from "../../common/panel/Panel";

import { LayersSection } from "./LayersSection";
import { ObjectDetail } from "./ObjectDetail";

export const SidePanel = ({
  layers,
  onBackHomeClick,
  onLayerSelected,
  onLayerOpacityChange,
  onTabClick,
  selectedObject,
  selectedTab,
  onDetailCancel,
}) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"ČasoMapa"}>
      <Pivot
        styles={{
          root: { display: "flex" },
          link: { flex: "0 0 50%", margin: 0, padding: 0 },
          linkIsSelected: { flex: "0 0 50%", margin: 0, padding: 0 },
        }}
        selectedKey={selectedTab}
        onLinkClick={onTabClick}
      >
        <PivotItem headerText="Vrstvy" itemIcon="Nav2DMapView" itemKey="layers">
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
        </PivotItem>
        <PivotItem
          headerText="Detail objektu"
          itemIcon="POISolid"
          itemKey="detail"
        >
          <div className="detail">
            <ObjectDetail object={selectedObject} onCancel={onDetailCancel} />
          </div>
        </PivotItem>
      </Pivot>
    </Panel>
  );
};