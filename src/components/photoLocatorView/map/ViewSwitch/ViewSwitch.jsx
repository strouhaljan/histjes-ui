import React, { useMemo } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const ViewSwitch = ({ onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={`viewSwitch ${styles.viewSwitch}`}>
      <PrimaryButton
        className={styles.button}
        iconProps={{ iconName: "Nav2DMapView" }}
        onClick={onZoomIn}
      />
      <DefaultButton
        className={styles.button}
        iconProps={{ iconName: "CubeShape" }}
        onClick={onZoomOut}
      />
    </div>
  );
};
