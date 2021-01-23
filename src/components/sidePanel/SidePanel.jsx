import React from "react";
import { PivotItem, Pivot, Label, ActionButton } from "@fluentui/react";

import { LayersSection } from "./LayersSection";
import { ObjectDetail } from "./ObjectDetail";

// const referenceLayers = [
//   { key: "a", text: "Orientační mapa", bg: "" },
//   { key: "b", text: "1840 - II. vojenské mapování" },
//   {
//     key: "c",
//     text: "1917 - III. vojenské mapování",
//   },
//   {
//     key: "d",
//     text: "1930 - III. vojenské mapování",
//     selected: true,
//   },
//   {
//     key: "e",
//     text: "2019 - Zabaged (vizualizace ZM10)",
//   },
// ];

// export const ReferenceLayerPicker: React.FunctionComponent = () => {
//   return <ChoiceGroup defaultSelectedKey="B" options={referenceLayers} />;
// };

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
      <BackHomeButton onClick={onBackHomeClick} />
      <Pivot
        styles={{
          root: { display: "flex" },
          link: { flex: "0 0 50%", margin: 0, padding: 0 },
          linkIsSelected: { flex: "0 0 50%", margin: 0, padding: 0 },
        }}
      >
        <PivotItem headerText="Vrstvy" itemIcon="Nav2DMapView">
          <Label className="tab">
            {/* <h4>Referenční vrstva</h4>
                    <Stack
                      className="checkbox-stack-inner"
                      tokens={stackTokens}
                    >
                      <ReferenceLayerPicker />
                    </Stack>
                    <div className="separator" /> */}
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
          </Label>
        </PivotItem>
        <PivotItem headerText="Detail objektu" itemIcon="POISolid">
          <Label className="detail">
            <ObjectDetail object={selectedObject} />
          </Label>
        </PivotItem>
      </Pivot>
      <div className="copy">
        <h1 className="logo_h1">Horské lesy Jeseníků</h1>
        <span>Virtuální knihovna zapomenuté historie</span>
      </div>
    </div>
  );
};
