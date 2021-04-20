import React, { useMemo } from "react";
import classNames from "classnames";
import { DefaultButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const ZoomControl = ({ className, onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const classes = classNames("zoomControl", styles.zoomControl, className);

  return (
    <div className={classes}>
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
