import React from "react";

import { Map as Mapycz, MouseControl, BaseLayers } from "react-mapycz";

import { ReferenceLayerSelect } from "./ReferenceLayerSelect";
import { HistorySlider } from "./HistorySlider";

export const Map = () => (
  <div>
    <Mapycz
      height="100vh"
      width="100%"
      center={{ lat: 50.0830764, lng: 17.2309767 }}
      baseLayers={[BaseLayers.OPHOTO]}
    >
      <MouseControl pan wheel zoom />
    </Mapycz>
    <ReferenceLayerSelect />
    <HistorySlider />
  </div>
);
