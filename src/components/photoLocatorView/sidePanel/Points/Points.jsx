import React, { useMemo } from "react";
import { FontIcon } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { getPointStyles, getStyles } from "./styles";
import { EditButtons } from "./EditButtons";

const PointValue = ({ label, value, styles, suffix }) => {
  return (
    <div className={styles.pointValueWrapper}>
      {label && (
        <span className={`${styles.pointValueLabel} pointValueLabel`}>
          {label}
        </span>
      )}
      <span className={`${styles.pointValue} pointValue`}>
        {value !== null ? `${suffix ? `${value}${suffix}` : value}` : "-"}
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
            value={deviation ? deviation.x : null}
            suffix=" px"
          />
          <PointValue
            styles={styles}
            label={"Y:"}
            value={deviation ? deviation.y : null}
            suffix=" px"
          />
          <PointValue
            styles={styles}
            label={"D:"}
            value={deviation ? deviation.d : null}
            suffix=" px"
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

export const Points = ({
  loadingDmt,
  points,
  onRemovePoint,
  onEditPoint,
  onLockPoint,
  onDisablePoint,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <>
      <div className={styles.points}>
        {points.map((_point, index) => {
          const renderedPointIndex = points.length - (index + 1);
          const point = points[renderedPointIndex];

          return (
            <Point
              key={point.identifier}
              point={point}
              index={renderedPointIndex}
              onRemovePoint={onRemovePoint}
              onEditPoint={onEditPoint}
              onLockPoint={onLockPoint}
              onDisablePoint={onDisablePoint}
            />
          );
        })}
      </div>
      {loadingDmt && <div>Probíhá zpracování...</div>}
    </>
  );
};
