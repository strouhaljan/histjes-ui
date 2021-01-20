import React, { useCallback } from "react";
import {
  Checkbox,
  Stack,
  PivotItem,
  Pivot,
  Label,
  ActionButton,
} from "@fluentui/react";

import { LayerOpacitySlider } from "./LayerOpacitySlider";

const stackTokens = { childrenGap: ".5rem" };

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

const LayersSection = ({ section }) => {
  const { name, identifier, layers } = section;
  const handleOnLayerOpacityChange = useCallback((layerId, opacity) =>
    alert(`Layer ${layerId} opacity: ${opacity}`)
  );

  return (
    <div key={identifier}>
      <h4>{name}</h4>
      <Stack className="checkbox-stack-inner" tokens={stackTokens}>
        {layers.map(({ name, identifier, enabled, opacity }) => (
          <div>
            <Checkbox label={name} checked={enabled} />
            {enabled && (
              <LayerOpacitySlider
                layerId={identifier}
                opacity={opacity}
                onChange={handleOnLayerOpacityChange}
              />
            )}
          </div>
        ))}
      </Stack>
    </div>
  );
};

export const SidePanel = ({ layers }) => {
  return (
    <div className="histjes-panel-inner">
      <ActionButton
        className="backButton"
        iconProps={{ iconName: "ChevronLeftSmall" }}
      >
        Zpět na rozcestník
      </ActionButton>
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
              <div>
                <LayersSection
                  key={layerSection.identifier}
                  section={layerSection}
                />
                {index !== layers.length - 1 && <div className="separator" />}
              </div>
            ))}
          </Label>
        </PivotItem>
        <PivotItem headerText="Detail objektu" itemIcon="POISolid">
          <Label>Detail objektu</Label>
        </PivotItem>
      </Pivot>
      <div className="copy">
        <h1 className="logo_h1">Horské lesy Jeseníků</h1>
        <span>Virtuální knihovna zapomenuté historie</span>
      </div>
    </div>
  );
};
