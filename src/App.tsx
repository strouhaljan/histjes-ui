import React from "react";
import { Map, MouseControl, BaseLayers } from "react-mapycz";
import {
  createTheme,
  Checkbox,
  Slider,
  DefaultButton,
  Fabric,
  loadTheme,
  Nav,
  // Pivot,
  // PivotItem,
  PrimaryButton,
  Stack,
  INavStyles,
  INavLinkGroup,
  ISliderProps,
  // Toggle,
} from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";

import "./App.scss";

const myTheme = createTheme({
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

loadTheme(myTheme);
initializeIcons();

const stackTokens = { childrenGap: 10 };

const LayerSlider = () => (
  <Slider
    className={"histjes-map-panel-checkbox-slider"}
    showValue={false}
    min={0}
    max={100}
    defaultValue={100}
    styles={{
      root: { width: "8rem" },
      slideBox: { padding: 0 },
    }}
  />
);

const HistorySlider = () => (
  <div className="history-slider">
    <Slider
      styles={{ container: { height: "400px" } }}
      label="Historie"
      min={1800}
      max={2020}
      step={10}
      defaultValue={2000}
      showValue
      vertical
    />
  </div>
);

const ReferenceLayer = () => (
  <div className="reference-layer">
    <Stack horizontal tokens={{ childrenGap: 10, padding: 10 }}>
      <DefaultButton text="1720" />
      <PrimaryButton text="1840" />
      <DefaultButton text="1876" />
      <DefaultButton text="1917" />
      <DefaultButton text="1930" />
      <DefaultButton text="1955" />
      <DefaultButton text="1985" />
      <DefaultButton text="2019" />
    </Stack>
  </div>
);

function App() {
  const onBackClick = () => alert("zpět");

  return (
    <Fabric applyThemeToBody>
      <div className="histjes-main ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="histjes-map ms-Grid-col ms-md8 ms-lg10" style={{ padding: "0" }}>
            <Map
              height="100vh"
              width="100%"
              center={{ lat: 50.0830764, lng: 17.2309767 }}
              baseLayers={[BaseLayers.OPHOTO]}
            >
              <MouseControl pan wheel zoom />
            </Map>
            <HistorySlider />
            <ReferenceLayer />
          </div>
          <div className="histjes-panel ms-Grid-col ms-md4 ms-lg2">
            <div onClick={onBackClick} className="back">
              <div className="back-arrow">
                <svg className="back-arrow-svg" viewBox="0 0 492 492">
                  <g>
                    <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
                    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
                    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
                    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
                  </g>
                </svg>
              </div>
              <span>zpět na rozcestník</span>
            </div>
            <div className="histjes-panel-inner">
              <div className="logo">
                {/* <h2>Virtuální knihovna zapomenuté historie</h2> */}
                {/* <h1>Horské lesy Jeseníků</h1> */}
                <svg viewBox="0 0 102 21" width="100%">
                  <text className="logo_h1" x="0" y="13">
                    Horské lesy Jeseníků
                </text>
                  <text className="logo_h2" x="84" y="19">
                    mapa
                </text>
                </svg>
              </div>
              <h4>Pozemkové mapy</h4>
              <Stack
                className="checkbox-stack-inner"
                tokens={stackTokens}
              >
                <Checkbox label="Stabilní k." />
                <div>
                  <Checkbox label="Pozemk. k." checked />
                  <LayerSlider />
                </div>
                <Checkbox label="SMO5" />
                <Checkbox label="KM" />
              </Stack>
              <h4>Ortofotomapy</h4>
              <h4>Stínování</h4>
              <Stack tokens={stackTokens}>
                <Checkbox label="Technické objekty" />
                <Checkbox label="Pokryv" />
                <div>
                  <Checkbox label="Foto" checked />
                  <LayerSlider />
                </div>
              </Stack>
              <div className="copy">
                <span>Horské lesy Jeseníků</span>
                <span>Virtuální knihovna zapomenuté historie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fabric>
  );
}

export default App;
