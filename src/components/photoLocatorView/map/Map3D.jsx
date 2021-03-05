import React, { useMemo } from "react";
import { Stack, DefaultButton } from "@fluentui/react";

import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

import { getMoveControlStyles } from "./styles";

export const Map3D = ({ onMoveBack, onMoveForward }) => {
  const styles = useMemo(() => getMoveControlStyles(), []);

  return (
    <Stack verticalFill>
      <Stack.Item grow>
        <div className={styles.moveControl}>
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
        </div>
        <MapContainer3D />
      </Stack.Item>
    </Stack>
  );
};
