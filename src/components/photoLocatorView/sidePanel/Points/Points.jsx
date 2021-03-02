import React, { useMemo, useCallback } from "react";
import {
  ActionButton,
  FontIcon,
  IconButton,
  TextField,
} from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const PointInput = ({ label, value, onChange, styles }) => {
  const onChangeHandler = useCallback((_event, value) => {
    console.log("XX", value);
  }, []);

  return (
    <TextField
      underlined
      className={styles.input}
      type="number"
      label={label}
      value={value}
      onChange={onChangeHandler}
    />
    // <SpinButton
    //   styles={{
    //     root: { minWidth: 0 },
    //     input: { minWidth: 0 },
    //     spinButtonWrapper: { minWidth: 0 },
    //   }}
    //   defaultValue="0"
    //   label={label}
    //   step={1}
    //   value={value}
    //   className={styles.input}
    // />
  );
};

const Point = ({ point, index, canBeRemoved, onRemovePoint }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme, index), [theme, index]);

  const onRemovePointHandler = () => {
    onRemovePoint(point.identifier);
  };

  return (
    <div className={styles.point}>
      <div>
        <div className={styles.photo}>
          <FontIcon className={styles.icon} iconName="ImageCrosshair" />
          <PointInput styles={styles} label={"X:"} value={point.photo.x} />
          <PointInput styles={styles} label={"Y:"} value={point.photo.y} />
        </div>
        <div className={styles.map}>
          <FontIcon className={styles.icon} iconName="Nav2DMapView" />
          <PointInput styles={styles} label={"X:"} value={point.map.x} />
          <PointInput styles={styles} label={"Y:"} value={point.map.y} />
          <PointInput styles={styles} label={"Z:"} value={point.map.z} />
        </div>
      </div>
      {canBeRemoved && (
        <IconButton
          className={`${styles.removeButton} removeButton`}
          iconProps={{ iconName: "RemoveFilter" }}
          onClick={onRemovePointHandler}
        />
      )}
    </div>
  );
};

export const Points = ({ loadingDmt, points, onAddPoint, onRemovePoint }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.points}>
      {points.map((point, index) => (
        <Point
          key={point.identifier}
          point={point}
          index={index}
          canBeRemoved={true}
          onRemovePoint={onRemovePoint}
        />
      ))}
      {!loadingDmt && (points.length < 3) && (
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
