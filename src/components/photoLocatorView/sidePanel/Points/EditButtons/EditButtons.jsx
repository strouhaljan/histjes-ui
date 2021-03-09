import React, { useCallback, useMemo } from "react";
import { IconButton } from "office-ui-fabric-react";

import { getStyles } from "./styles";

export const EditButtons = ({
  point,
  onEditPoint,
  onRemovePoint,
  onLockPoint
}) => {
  const styles = useMemo(() => getStyles(), []);

  const onRemovePointHandler = useCallback(() => {
    onRemovePoint(point.identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [point]);

  const onEditPointHandler = useCallback(() => {
    onEditPoint(point.identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [point]);

  const onLockPointHandler = useCallback(() => {
    onLockPoint(point.identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
