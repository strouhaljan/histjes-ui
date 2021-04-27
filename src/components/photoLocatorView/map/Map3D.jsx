import React, { useMemo } from "react";
import { Stack, DefaultButton } from "@fluentui/react";

import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

import { getStyles } from "./styles";

export const Map3D = ({
  adjustedCameraParams,
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
                title="Přejít na vypočítanou pozici kamery"
                onClick={onMoveToCalculated}
              />
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "ReceiptForward" }}
                disabled={!adjustedCameraParams}
                title="Přejít na upravenou pozici kamery"
                onClick={onMoveToAdjusted}
              />
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "ReceiptCheck" }}
                title="Uložit aktuální pozici kamery jako upravenou"
                onClick={onSetAdjusted}
              />
            </div>
          )}
        <MapContainer3D />
      </Stack.Item>
    </Stack>
  );
};
