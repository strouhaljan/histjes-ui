import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const Parameters = ({ parameters }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const { focalLength, sensorDimensions } = parameters;

  return (
    <div className={""}>
      <div className={styles.valueWrapper}>
        <span className={styles.valueLabel}>Ohnisková vzdálenost:</span>
        <span className={styles.value}>{`${focalLength} mm`}</span>
      </div>
      <div className={styles.valueWrapper}>
        <span className={styles.valueLabel}>Rozměry snímače:</span>
        <span className={styles.value}>
          &#11021;{` ${sensorDimensions.height} mm | `}
          &#11020;{` ${sensorDimensions.width} mm`}
        </span>
      </div>
    </div>
  );
};
