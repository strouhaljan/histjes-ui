import React, { useMemo } from "react";
import { ActionButton, FontIcon, IconButton } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { getPointStyles, getStyles } from "./styles";

const PointValue = ({ label, value, styles }) => {
  return (
    <div className={styles.pointValueWrapper}>
      <span className={styles.pointValueLabel}>{label}</span>
      <span className={styles.pointValue}>{value}</span>
    </div>
  );
};

const Point = ({ point, index, onRemovePoint, onEditPoint }) => {
  const theme = useTheme();
  const styles = useMemo(() => getPointStyles(theme, index, point), [
    theme,
    index,
    point,
  ]);

  const onRemovePointHandler = () => {
    onRemovePoint(point.identifier);
  };

  const onEditPointHandler = () => {
    onEditPoint(point.identifier);
  };

  return (
    <div className={styles.point}>
      <div>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="ImageCrosshair" />
          <PointValue styles={styles} label={"X:"} value={point.photo.x} />
          <PointValue styles={styles} label={"Y:"} value={point.photo.y} />
        </div>
        <div className={styles.pointValues}>
          <FontIcon className={styles.icon} iconName="Nav2DMapView" />
          <PointValue styles={styles} label={"X:"} value={point.map.x} />
          <PointValue styles={styles} label={"Y:"} value={point.map.y} />
          <PointValue styles={styles} label={"Z:"} value={point.map.z} />
        </div>
      </div>
      <div className={`${styles.editButtons} editButtons`}>
        <IconButton
          iconProps={{ iconName: "Edit" }}
          onClick={onEditPointHandler}
        />
        <IconButton
          iconProps={{ iconName: "RemoveFilter" }}
          onClick={onRemovePointHandler}
        />
      </div>
    </div>
  );
};

export const Points = ({
  loadingDmt,
  points,
  onAddPoint,
  onRemovePoint,
  onEditPoint,
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
