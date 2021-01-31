import React from "react";
import { PivotItem, Pivot, ActionButton } from "@fluentui/react";

import { LayersSection } from "./LayersSection";
import { ObjectDetail } from "./ObjectDetail";

const BackHomeButton = ({ onClick }) => (
  <ActionButton
    className="backButton"
    iconProps={{ iconName: "ChevronLeftSmall" }}
    onClick={onClick}
  >
    Zpět na rozcestník
  </ActionButton>
);

export const SidePanel = ({
  layers,
  onBackHomeClick,
  onLayerSelected,
  onLayerOpacityChange,
  selectedObject,
}) => {
  return (
    <div className="histjes-panel-inner">
      <div className="copy">
        <h2 className="logo_h2">Virtuální knihovna zapomenuté historie</h2>
        <h1 className="logo_h1">Horské lesy Jeseníků</h1>
        <span className="logo_subtitle">fotohledač</span>
      </div>
      <BackHomeButton onClick={onBackHomeClick} />
      <Pivot
        styles={{
          root: { display: "flex" },
          link: { flex: "0 0 50%", margin: 0, padding: 0 },
          linkIsSelected: { flex: "0 0 50%", margin: 0, padding: 0 },
        }}
      >
        <PivotItem headerText="Vrstvy" itemIcon="Nav2DMapView">
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
        <PivotItem headerText="Detail objektu" itemIcon="POISolid">
          <div className="detail">
            <ObjectDetail object={selectedObject} />
          </div>
        </PivotItem>
      </Pivot>
    </div>
  );
};
