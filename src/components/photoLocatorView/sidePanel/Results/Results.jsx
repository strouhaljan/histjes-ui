import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { toWgs84 } from "../../../proj4utils";

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

const Result = ({ result, styles }) => {
  const wgsResult = toWgs84([result.x, result.y], 5);
  return (
    <div className={styles.result}>
      <div className={styles.resultValues}>
        <ResultValue styles={styles} label={"N:"} value={wgsResult[1]} />
        <ResultValue styles={styles} label={"E:"} value={wgsResult[0]} />
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
      {(result.focalLength && result.sensorSize) && (
        <div className={styles.resultValues}>
          <ResultValue styles={styles} label={"OV:"} value={Math.round(result.focalLength)} />
          <ResultValue styles={styles} label={"Š:"} value={Math.round(result.sensorSize[0])} />
          <ResultValue styles={styles} label={"V:"} value={Math.round(result.sensorSize[1])} />
        </div>
      )}
    </div>
  );
}

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
          <div className={styles.resultLabel}>Vypočítané parametry kamery:</div>
          <Result result={calculatedCameraParams} styles={styles} />
        </>
      )}
      {adjustedCameraParams && (
        <>
          <div className={styles.resultLabel}>Upravené parametry kamery:</div>
          <Result result={adjustedCameraParams} styles={styles} />
        </>
      )}
    </div>
  );
};
