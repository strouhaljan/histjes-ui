import React, { useMemo, useState } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";
import { EditPointDialog } from "./EditPointDialog";

import getStyles from "./styles";

export const View = ({
  calculating,
  calculatedCameraParams,
  file,
  focalLength,
  heightAboveGround,
  loadingDmt,
  points,
  selectedBaseLayer,
  selectedView,
  onAcceptFile,
  onAddPoint,
  onRemovePoint,
  onLockPoint,
  onBackHomeClick,
  onNewProject,
  onOpenProject,
  getProjectData,
  onChangeBaseLayer,
  onChangeView,
  onZoomIn,
  onZoomOut,
  onPhotoZoomIn,
  onPhotoZoomOut,
  onPhotoFitScreen,
  on3DViewMoveForward,
  on3DViewMoveBack,
  on3DViewMoveToCalculated,
  onCalculateClick,
  onFocalLengthChange,
  onHeightAboveGroundChange
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [editedPoint, setEditedPoint] = useState(null);
  const editingPoint = points.find((point) => point.identifier === editedPoint);

  return (
    <div className={styles.main}>
      <SidePanel
        calculating={calculating}
        fileLoaded={!!file}
        focalLength={focalLength}
        heightAboveGround={heightAboveGround}
        loadingDmt={loadingDmt}
        points={points}
        onAddPoint={onAddPoint}
        onBackHomeClick={onBackHomeClick}
        onNewProject={onNewProject}
        onOpenProject={onOpenProject}
        getProjectData={getProjectData}
        onRemovePoint={onRemovePoint}
        onEditPoint={setEditedPoint}
        onLockPoint={onLockPoint}
		    onCalculateClick={onCalculateClick}
        onFocalLengthChange={onFocalLengthChange}
        onHeightAboveGroundChange={onHeightAboveGroundChange}
      />
      <div className={styles.locator}>
        <Photo
          file={file}
          onAcceptFile={onAcceptFile}
          onZoomIn={onPhotoZoomIn}
          onZoomOut={onPhotoZoomOut}
          onFitScreen={onPhotoFitScreen}
        />
        <Map
          calculatedCameraParams={calculatedCameraParams}
          selectedBaseLayer={selectedBaseLayer}
          selectedView={selectedView}
          onChangeBaseLayer={onChangeBaseLayer}
          onChangeView={onChangeView}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
          onMoveForward={on3DViewMoveForward}
          onMoveBack={on3DViewMoveBack}
          onMoveToCalculated={on3DViewMoveToCalculated}
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
