import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";

import getStyles from "./styles";

export const View = ({
  file,
  loadingDmt,
  points,
  selectedBaseLayer,
  selectedView,
  onAcceptFile,
  onAddPoint,
  onBackHomeClick,
  onNewProject,
  onRemovePoint,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.main}>
      <SidePanel
        fileLoaded={!!file}
        loadingDmt={loadingDmt}
        points={points}
        onAddPoint={onAddPoint}
        onBackHomeClick={onBackHomeClick}
        onNewProject={onNewProject}
        onRemovePoint={onRemovePoint}
      />
      <div className={styles.locator}>
        <Photo
          file={file}
          onAcceptFile={onAcceptFile}
        />
        <Map
          selectedBaseLayer={selectedBaseLayer}
          selectedView={selectedView}
          onChangeBaseLayer={onChangeBaseLayer}
          onChangeView={onChangeView}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
    </div>
  );
};
