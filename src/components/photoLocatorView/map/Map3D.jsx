import React, { useMemo } from "react";
import classNames from "classnames";
import { Stack, DefaultButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import MapContainer3D from "../../photoLocatorState/map/MapContainer3D";

import { getStyles } from "./styles";

export const Map3D = ({
  adjustedCameraParams,
  calculatedCameraParams,
  onMoveToAdjusted,
  onMoveToCalculated,
  onSetAdjusted,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <Stack verticalFill>
      <Stack.Item grow>
        {calculatedCameraParams && (
          <>
            <div className={styles.moveControl}>
              <DefaultButton
                className={styles.button}
                iconProps={{ iconName: "Location" }}
                title="Přejít na vypočítanou pozici kamery"
                onClick={onMoveToCalculated}
              />
              <DefaultButton
                className={classNames(styles.button, {
                  [styles.disabledButton]: true || !adjustedCameraParams,
                })}
                iconProps={{ iconName: "BullseyeTargetEdit" }}
                title="Přejít na upravenou pozici kamery"
                onClick={onMoveToAdjusted}
              />
            </div>
            <div className={styles.savePositionButton}>
              <DefaultButton
                className={styles.button}
                text={"Uložit pozici kamery"}
                title="Uložit aktuální pozici kamery jako upravenou"
                onClick={onSetAdjusted}
              />
            </div>
          </>
        )}
        <div className={styles.crossVertical} />
        <div className={styles.crossHorizontal} />
        <MapContainer3D />
      </Stack.Item>
    </Stack>
  );
};
