import React, { useMemo } from "react";
import { Stack, DefaultButton } from "@fluentui/react";

import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

import { getMoveControlStyles } from "./styles";

export const Map3D = ({ calculatedCameraParams, onMoveBack, onMoveForward, onMoveToCalculated }) => {
  const styles = useMemo(() => getMoveControlStyles(), []);

  return (
    <Stack verticalFill>
      <Stack.Item grow>
        {calculatedCameraParams && <div className={styles.moveControl}>
          <DefaultButton
            className={styles.button}
            iconProps={{ iconName: "Location" /* PresenceChickletVideo, Camera */ }}
            onClick={onMoveToCalculated}
          />
          <DefaultButton
            className={styles.button}
            iconProps={{ iconName: "CaretSolidUp" }}
            onClick={onMoveForward}
          />
          <DefaultButton
            className={styles.button}
            iconProps={{ iconName: "CaretSolidDown" }}
            onClick={onMoveBack}
          />
        </div>}
        <MapContainer3D />
      </Stack.Item>
    </Stack>
  );
};
