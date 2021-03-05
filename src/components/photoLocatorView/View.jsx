import React, { useMemo, useState } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";
import { EditPointDialog } from "./EditPointDialog";

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
  onOpenProject,
  getProjectData,
  onRemovePoint,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut,
  onPhotoZoomIn,
  onPhotoZoomOut,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [editedPoint, setEditedPoint] = useState(null);
  const editingPoint = points.find((point) => point.identifier === editedPoint);

  return (
    <div className={styles.main}>
      <SidePanel
        fileLoaded={!!file}
        loadingDmt={loadingDmt}
        points={points}
        onAddPoint={onAddPoint}
        onBackHomeClick={onBackHomeClick}
        onNewProject={onNewProject}
        onOpenProject={onOpenProject}
        getProjectData={getProjectData}
        onRemovePoint={onRemovePoint}
        onEditPoint={setEditedPoint}
      />
      <div className={styles.locator}>
        <Photo
          file={file}
          onAcceptFile={onAcceptFile}
          onZoomIn={onPhotoZoomIn}
          onZoomOut={onPhotoZoomOut}
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
      <EditPointDialog
        display={!!editedPoint}
        point={editingPoint}
        onSetPoint={() => {}}
        onDismiss={() => {
          setEditedPoint(null);
        }}
      />
    </div>
  );
};
