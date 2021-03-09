import React, { useMemo } from "react";
import { ActionButton, FontIcon } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { getPointStyles, getStyles } from "./styles";
import { EditButtons } from "./EditButtons";

const PointValue = ({ label, value, styles }) => {
  return (
    <div className={styles.pointValueWrapper}>
      <span className={styles.pointValueLabel}>{label}</span>
      <span className={styles.pointValue}>{value}</span>
    </div>
  );
};

const Point = ({ point, index, onRemovePoint, onEditPoint, onLockPoint }) => {
  const theme = useTheme();
  const styles = useMemo(() => getPointStyles(theme, index, point), [
    theme,
    index,
    point,
  ]);

  return (
    <div className={styles.point}>
      <div>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="ImageCrosshair" />
          <PointValue styles={styles} label={"X:"} value={point.photo.x} />
          <PointValue styles={styles} label={"Y:"} value={point.photo.y} />
          <div className={styles.pointValueWrapper}></div>
        </div>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="Nav2DMapView" />
          <PointValue styles={styles} label={"X:"} value={point.map.x} />
          <PointValue styles={styles} label={"Y:"} value={point.map.y} />
          <PointValue styles={styles} label={"Z:"} value={point.map.z} />
        </div>
      </div>
      <EditButtons
        point={point}
        onRemovePoint={onRemovePoint}
        onEditPoint={onEditPoint}
        onLockPoint={onLockPoint}
      />
    </div>
  );
};

export const Points = ({
  loadingDmt,
  points,
  onAddPoint,
  onRemovePoint,
  onEditPoint,
  onLockPoint,
}) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div>
      {points.map((point, index) => (
        <Point
          key={point.identifier}
          point={point}
          index={index}
          onRemovePoint={onRemovePoint}
          onEditPoint={onEditPoint}
          onLockPoint={onLockPoint}
        />
      ))}
      {!loadingDmt && points.length < 4 && (
        <ActionButton
          className={styles.addButton}
          iconProps={{ iconName: "Add" }}
          text={"Přidat bod"}
          onClick={onAddPoint}
        />
      )}
      {loadingDmt && <div>Probíhá zpracování...</div>}
    </div>
  );
};
