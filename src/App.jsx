import React from "react";
import { createTheme, loadTheme } from "@fluentui/react";
import { ThemeProvider } from "@fluentui/react-theme-provider";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";

import "./App.scss";
import { Map } from "./components/map/Map";
import { SidePanel } from "./components/sidePanel/SidePanel";

const theme = createTheme({
  palette: {
    themePrimary: "#2e2e78",
    themeLighterAlt: "#f3f3fa",
    themeLighter: "#d2d2e9",
    themeLight: "#afafd6",
    themeTertiary: "#6d6dae",
    themeSecondary: "#3e3e88",
    themeDarkAlt: "#29296c",
    themeDark: "#23235b",
    themeDarker: "#1a1a43",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

loadTheme(theme);
initializeIcons();

const defaultLayersState = [
  {
    name: "Pozemkové mapy",
    identifier: "pozemkove_mapy",
    layers: [
      {
        identifier: "katastr",
        name: "Katastrální",
        enabled: true,
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

function App() {
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

  const selectedObject = {
    name: "Chata",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor lectus luctus, hendrerit dolor in, lobortis orci. Duis eleifend metus placerat, eleifend ipsum sit amet, elementum elit. Maecenas dictum rhoncus turpis dictum eleifend. Suspendisse a mauris eu orci tincidunt maximus. Mauris faucibus sed ante sit amet congue. Quisque eget tellus eu erat consequat gravida. Nulla lobortis elit sapien, sed luctus felis iaculis vel. Pellentesque ornare mi ligula, sed egestas tortor vestibulum eu. Phasellus ac felis vestibulum, bibendum urna ac, ullamcorper arcu. Nullam mi nibh, varius ut placerat eu, viverra ut quam. Quisque varius enim sed nulla blandit varius.

      Suspendisse suscipit aliquet augue, semper porta sapien cursus id. Suspendisse venenatis laoreet erat in mollis. Suspendisse pharetra tempor nunc vel consectetur. Suspendisse et mattis eros. Duis a porta purus, vitae maximus sapien. Nunc leo eros, faucibus nec tellus at, porta convallis lectus. Cras quis felis dui.
    `,
  };

  return (
    <ThemeProvider applyTo="body" theme={theme}>
      <div className="histjes-main">
        <div className="histjes-map">
          <Map
            onHistoryChanged={onHistoryChanged}
            onReferenceLayerChanged={onReferenceLayerChanged}
          />
        </div>
        <div className="histjes-panel">
          <SidePanel
            layers={defaultLayersState}
            onBackHomeClick={onBackHomeClick}
            onLayerSelected={onLayerSelected}
            onLayerOpacityChange={onLayerOpacityChange}
            selectedObject={selectedObject}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
