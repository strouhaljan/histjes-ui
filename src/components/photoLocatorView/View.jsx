import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";

import getStyles from "./styles";

export const View = ({
  onBackHomeClick,
  file,
  points,
  onAddPoint,
  onRemovePoint,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.main}>
      <SidePanel
        onBackHomeClick={onBackHomeClick}
        points={points}
        onAddPoint={onAddPoint}
        onRemovePoint={onRemovePoint}
      />
      <div className={styles.locator}>
        <Photo file={file} />
        <Map />
      </div>
    </div>
  );
};
