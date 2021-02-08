import React from "react";
import { ThemeProvider } from "@fluentui/react-theme-provider";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";

import "./App.scss";

import { theme } from "./theme";
import CasoMapaPage from "./CasoMapaPage";

initializeIcons();

function App() {

  return (
    <ThemeProvider applyTo="body" theme={theme}>
      <CasoMapaPage />
    </ThemeProvider>
  );
}

export default App;
