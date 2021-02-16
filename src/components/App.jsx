import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@fluentui/react-theme-provider";

import { initializeIcons } from "@fluentui/react/lib/Icons";
import "office-ui-fabric-react/dist/css/fabric.css";

import { theme } from "../theme";

import { TimeMapPage } from "./TimeMapPage";
import { PhotoLocatorPage } from "./PhotoLocatorPage";
import { InfoFinderPage } from "./InfoFinderPage";

initializeIcons();

function App() {
  return (
    <ThemeProvider applyTo="body" theme={theme}>
      <Router>
        <Switch>
          <Route path="/map">
            <TimeMapPage />
          </Route>
          <Route path="/photolocator">
            <PhotoLocatorPage />
          </Route>
          <Route path="/info">
            <InfoFinderPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
