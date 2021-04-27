import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const ResultValue = ({ label, value, styles, suffix }) => {
  return (
    <div className={styles.resultValueWrapper}>
      {label && (
        <span className={`${styles.resultValueLabel} pointValueLabel`}>
          {label}
        </span>
      )}
      <span className={`${styles.resultValue} pointValue`}>
        {value !== null ? `${suffix ? `${value}${suffix}` : value}` : "-"}
      </span>
    </div>
  );
};

const Result = ({ result, styles }) => (
  <div className={styles.result}>
    <div className={styles.resultValues}>
      <ResultValue styles={styles} label={"X:"} value={Math.round(result.x)} />
      <ResultValue styles={styles} label={"Y:"} value={Math.round(result.y)} />
      <ResultValue styles={styles} label={"Z:"} value={Math.round(result.z)} />
    </div>
    <div className={styles.resultValues}>
      <ResultValue
        styles={styles}
        label={"ω:"}
        value={Math.round(result.yaw)}
        suffix="°"
      />
      <ResultValue
        styles={styles}
        label={"γ:"}
        value={Math.round(result.pitch)}
        suffix="°"
      />
      <ResultValue
        styles={styles}
        label={"χ:"}
        value={Math.round(result.roll)}
        suffix="°"
      />
    </div>
  </div>
);

export const Results = ({ calculatedCameraParams, adjustedCameraParams }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  if (!calculatedCameraParams && !adjustedCameraParams) {
    return null;
  }

  return (
    <div>
      {calculatedCameraParams && (
        <>
          <div className={styles.resultLabel}>Vypočítaná orientace kamery:</div>
          <Result result={calculatedCameraParams} styles={styles} />
        </>
      )}
      {adjustedCameraParams && (
        <>
          <div className={styles.resultLabel}>Upravená orientace kamery:</div>
          <Result result={adjustedCameraParams} styles={styles} />
        </>
      )}
    </div>
  );
};
