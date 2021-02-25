import React from "react";
import { Stack } from "@fluentui/react";
import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

export const Map3D = () => {
  return (
    <Stack verticalFill>
      <Stack.Item grow>
        <MapContainer3D />
      </Stack.Item>
    </Stack>
 );
};
