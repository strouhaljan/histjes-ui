import React from "react";
import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

export const Map3D = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%", display: "flex" }}>
        <MapContainer3D />
      </div>
    </>
  );
};
