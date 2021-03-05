import React, { useMemo } from "react";
import { DefaultButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const ZoomControl = ({ onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={`zoomControl ${styles.zoomControl}`}>
      <DefaultButton
        className={styles.button}
        iconProps={{ iconName: "Add" }}
        onClick={onZoomIn}
      />
      <DefaultButton
        className={styles.button}
        iconProps={{ iconName: "Remove" }}
        onClick={onZoomOut}
      />
    </div>
  );
};
