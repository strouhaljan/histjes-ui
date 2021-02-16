import React, { useMemo } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const LayerSwitch = ({ onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={`layerSwitch ${styles.layerSwitch}`}>
      <DefaultButton
        className={styles.button}
        onClick={onZoomIn}
        text={"Mapa"}
      />
      <PrimaryButton
        className={styles.button}
        onClick={onZoomOut}
        text={"Ortofoto"}
      />
    </div>
  );
};
