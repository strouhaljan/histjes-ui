import React, { useMemo } from "react";
import { DefaultButton, FontIcon } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { getPointStyles, getStyles } from "./styles";
import { EditButtons } from "./EditButtons";
import { HeightCorrection } from "./HeightCorrection";

const PointValue = ({ label, value, styles, suffix, dimmed }) => {
  return (
    <div className={styles.pointValueWrapper}>
      {label && (
        <span className={`${styles.pointValueLabel} pointValueLabel`}>
          {label}
        </span>
      )}
      <span className={`${styles.pointValue} pointValue`}>
        {value !== null ? `${suffix ? `${value} ${suffix}` : value}` : "-"}
      </span>
    </div>
  );
};

const Point = ({
  point,
  index,
  onRemovePoint,
  onEditPoint,
  onLockPoint,
  onDisablePoint,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getPointStyles(theme, index, point), [
    theme,
    index,
    point,
  ]);
  const { photo, map, deviation, disabled } = point;

  return (
    <div className={styles.point}>
      <div className={styles.pointDetails}>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="ImageCrosshair" />
          <PointValue styles={styles} label={"X:"} value={photo.x} />
          <PointValue styles={styles} label={"Y:"} value={photo.y} />
          <div className={styles.pointValueWrapper}></div>
        </div>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="Nav2DMapView" />
          <PointValue styles={styles} label={"X:"} value={map.x} />
          <PointValue styles={styles} label={"Y:"} value={map.y} />
          <PointValue styles={styles} label={"Z:"} value={map.z} />
        </div>
        <div className={`${styles.pointValues} ${styles.deviation}`}>
          <FontIcon className={styles.icon} iconName="TriangleUp12" />
          <PointValue
            styles={styles}
            label={"X:"}
            value={deviation.x}
            suffix="px"
            dimmed
          />
          <PointValue
            styles={styles}
            label={"Y:"}
            value={deviation.y}
            suffix="px"
            dimmed
          />
          <PointValue
            styles={styles}
            label={"D:"}
            value={deviation.d}
            suffix="px"
            dimmed
          />
        </div>
      </div>
      {disabled && <div className={styles.disabled} />}
      <EditButtons
        point={point}
        onRemovePoint={onRemovePoint}
        onEditPoint={onEditPoint}
        onLockPoint={onLockPoint}
        onDisablePoint={onDisablePoint}
      />
    </div>
  );
};

const MAX_POINT_COUNT = 8;

export const Points = ({
  loadingDmt,
  points,
  onAddPoint,
  onRemovePoint,
  onEditPoint,
  onLockPoint,
  onDisablePoint,
  heightCorrection,
  onHeightCorrectionChange,
}) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div>
      <div className={styles.points}>
        {points.map((point, index) => (
          <Point
            key={point.identifier}
            point={point}
            index={index}
            onRemovePoint={onRemovePoint}
            onEditPoint={onEditPoint}
            onLockPoint={onLockPoint}
            onDisablePoint={onDisablePoint}
          />
        ))}
      </div>
      {!loadingDmt && points.length < MAX_POINT_COUNT && (
        <DefaultButton
          className={styles.addButton}
          iconProps={{ iconName: "Add" }}
          text={"Přidat bod"}
          onClick={onAddPoint}
        />
      )}
      <HeightCorrection
        value={heightCorrection}
        onChange={onHeightCorrectionChange}
      />
      {loadingDmt && <div>Probíhá zpracování...</div>}
    </div>
  );
};
