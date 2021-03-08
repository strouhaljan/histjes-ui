import React, { useCallback } from "react";
import { IconButton } from "office-ui-fabric-react";

import { getStyles } from "./styles";

export const EditButtons = ({
  point,
  onEditPoint,
  onRemovePoint,
  onLockPoint,
  styles,
}) => {
  const styles = useMemo(() => getStyles(), []);

  const onRemovePointHandler = useCallback(() => {
    onRemovePoint(point.identifier);
  }, [point]);

  const onEditPointHandler = useCallback(() => {
    onEditPoint(point.identifier);
  }, [point]);

  const onLockPointHandler = useCallback(() => {
    onLockPoint(point.identifier);
  }, [point]);

  if (point.lock) {
    return (
      <div className={`${styles.editButtons} editButtons visible`}>
        <IconButton
          iconProps={{ iconName: "Lock" }}
          onClick={onLockPointHandler}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.editButtons} editButtons`}>
      <IconButton
        iconProps={{ iconName: "Edit" }}
        onClick={onEditPointHandler}
      />
      <IconButton
        iconProps={{ iconName: "Delete" }}
        onClick={onRemovePointHandler}
      />
      <IconButton
        iconProps={{ iconName: "Unlock" }}
        onClick={onLockPointHandler}
      />
    </div>
  );
};
