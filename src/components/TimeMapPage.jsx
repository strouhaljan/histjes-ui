import React, { useState } from "react";

import { View } from "./timeMapView/View";

const layers = [
  {
    name: "Pozemkové mapy",
    identifier: "pozemkove_mapy",
    layers: [
      {
        identifier: "katastr",
        name: "Katastrální",
        enabled: false,
        opacity: 50,
      },
    ],
  },
  {
    name: "Ortofotomapy",
    identifier: "ortofotomapy",
    layers: [
      {
        identifier: "aktualni",
        name: "Aktuální",
        enabled: true,
        opacity: 100,
      },
      {
        identifier: "archivni_ortofoto",
        name: "Archivní ortofoto ČÚZK (2000)",
        enabled: false,
        opacity: 100,
      },
    ],
  },
  {
    name: "Ostatní",
    identifier: "ostatni",
    layers: [
      {
        identifier: "stinovani",
        name: "Stínování",
        enabled: true,
        opacity: 10,
      },
    ],
  },
];

export function TimeMapPage({ objects }) {
  const [objectsYear, setObjectsYear] = useState(1990);
  const [objectsEnabled, setObjectsEnabled] = useState(false);

  const onReferenceLayerChanged = (layerId) => {
    alert(`Reference layer changed: ${layerId}`);
  };
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };
  const onLayerSelected = (layerId, selected) => {
    alert(`Layer ${layerId}: ${selected ? "selected" : "not selected"}`);
  };
  const onLayerOpacityChange = (layerId, opacity) => {
    alert(`Layer ${layerId} opacity changed: ${opacity}`);
  };
  const onZoomIn = () => {
    alert(`Zoomed in`);
  };
  const onZoomOut = () => {
    alert(`Zoomed out`);
  };
  const onDetailCancel = () => {
    alert(`Detail cancelled`);
  };

  return (
    <View
      onReferenceLayerChanged={onReferenceLayerChanged}
      onBackHomeClick={onBackHomeClick}
      onLayerSelected={onLayerSelected}
      onLayerOpacityChange={onLayerOpacityChange}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onDetailCancel={onDetailCancel}
      objectsYear={objectsYear}
      onObjectsYearChanged={setObjectsYear}
      objectsEnabled={objectsEnabled}
      onObjectsToggle={setObjectsEnabled}
      selectedObject={objects[0]}
      selectedBaseLayer="2019_zagabed"
      layers={layers}
    />
  );
}
