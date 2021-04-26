import React, { useMemo } from "react";
import { Stack, DefaultButton } from "@fluentui/react";

import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

import { getStyles } from "./styles";

export const Map3D = ({
  calculatedCameraParams,
  onMoveToAdjusted,
  onMoveToCalculated,
  onSetAdjusted
}) => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <Stack verticalFill>
      <Stack.Item grow>
        {calculatedCameraParams &&
          (
            <div className={styles.moveControl}>
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "Location" }}
                onClick={onMoveToCalculated}
              />
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "ReceiptForward" }}
                onClick={onMoveToAdjusted}
              />
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "ReceiptCheck" }}
                onClick={onSetAdjusted}
              />
            </div>
          )}
        <MapContainer3D />
      </Stack.Item>
    </Stack>
  );
};
