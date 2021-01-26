import React from "react";

import MapContainer from "./MapContainer";
import { ReferenceLayerSelect } from "./ReferenceLayerSelect";
import { HistorySlider } from "./HistorySlider";

export const Map = ({ selectedBaseLayer, onHistoryChanged, onReferenceLayerChanged }) => (
  <div>
    <div style={{height: '100vh', width: '100%', display: 'flex'}}>
      <MapContainer />
    </div>
    <ReferenceLayerSelect
      selectedLayer={selectedBaseLayer}
      onChanged={onReferenceLayerChanged}
    />
    <HistorySlider onChanged={onHistoryChanged} />
  </div>
);
