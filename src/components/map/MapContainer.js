import React from "react";

import { Map as Mapycz, MouseControl, BaseLayers } from "react-mapycz";

const MapContainer = () => (
    <Mapycz
        height="100vh"
        width="100%"
        center={{ lat: 50.0830764, lng: 17.2309767 }}
        baseLayers={[BaseLayers.OPHOTO]}
    >
        <MouseControl pan wheel zoom />
    </Mapycz>
);

export default MapContainer;
