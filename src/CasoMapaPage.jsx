import React from "react";

import { Map } from "./components/map/Map";
import { SidePanel } from "./components/sidePanel/SidePanel";


const defaultLayersState = [
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
      {
        identifier: "technicke_objekty",
        name: "Technické objekty",
        enabled: false,
        opacity: 10,
      },
    ],
  },
];

function CasoMapaPage() {
  // const [layers, setLayers] = useState(defaultLayersState);

  const onHistoryChanged = (year) => {
    alert(`History changed: ${year}`);
  };
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

  const selectedObject = {
    name: "Chata",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lectus luctus, hendrerit dolor in, lobortis orci. Duis eleifend metus placerat, eleifend ipsum sit amet, elementum elit. Maecenas dictum rhoncus turpis dictum eleifend. Suspendisse a mauris eu orci tincidunt maximus. Mauris faucibus sed ante sit amet congue. Quisque eget tellus eu erat consequat gravida. Nulla lobortis elit sapien, sed luctus felis iaculis vel. Pellentesque ornare mi ligula, sed egestas tortor vestibulum eu. Phasellus ac felis vestibulum, bibendum urna ac, ullamcorper arcu. Nullam mi nibh, varius ut placerat eu, viverra ut quam. Quisque varius enim sed nulla blandit varius.

      Suspendisse suscipit aliquet augue, semper porta sapien cursus id. Suspendisse venenatis laoreet erat in mollis. Suspendisse pharetra tempor nunc vel consectetur. Suspendisse et mattis eros. Duis a porta purus, vitae maximus sapien. Nunc leo eros, faucibus nec tellus at, porta convallis lectus. Cras quis felis dui.
    `,
  };

  return (
    <div className="histjes-main">
      <div className="histjes-map">
        <Map
          selectedBaseLayer="2019_zagabed"
          onHistoryChanged={onHistoryChanged}
          onReferenceLayerChanged={onReferenceLayerChanged}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
      <div className="histjes-panel">
        <SidePanel
          layers={defaultLayersState}
          onBackHomeClick={onBackHomeClick}
          onLayerSelected={onLayerSelected}
          onLayerOpacityChange={onLayerOpacityChange}
          // selectedObject={selectedObject}
          onDetailCancel={onDetailCancel}
        />
      </div>
    </div>
  );
}

export default CasoMapaPage;
