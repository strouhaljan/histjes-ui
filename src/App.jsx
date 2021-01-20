import React, { useState } from "react";
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
  const [layers, setLayers] = useState(defaultLayersState);

  return (
    <ThemeProvider applyTo="body" theme={theme}>
      <div className="histjes-main ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div
            className="histjes-map ms-Grid-col ms-md8 ms-lg10"
            style={{ padding: "0" }}
          >
            <Map />
          </div>
          <div className="histjes-panel ms-Grid-col ms-md4 ms-lg2">
            <SidePanel layers={layers} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
