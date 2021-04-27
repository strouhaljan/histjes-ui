import React, { useMemo, useState } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";
import { EditPointDialog } from "./EditPointDialog";

import getStyles from "./styles";
import { EditCameraParametersDialog } from "./EditCameraParametersDialog";

export const View = ({
  calculating,
  adjustedCameraParams,
  calculatedCameraParams,
  file,
  loadingDmt,
  points,
  selectedBaseLayer,
  selectedView,
  onAcceptFile,
  onAddPoint,
  onRemovePoint,
  onLockPoint,
  onDisablePoint,
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
  on3DViewSetAdjusted,
  on3DViewMoveToAdjusted,
  on3DViewMoveToCalculated,
  onCalculateClick,
  onTransformCoord,
  onSetPoint,
  cameraParameters,
  onSetCameraParameters,
  heightCorrection,
  onHeightCorrectionChange,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [editedPoint, setEditedPoint] = useState(null);
  const [
    cameraParametersDialogDisplayed,
    setCameraParametersDialogDisplayed,
  ] = useState(false);
  const editingPoint = points.find((point) => point.identifier === editedPoint);

  const handleOnApplyCameraParameters = (cameraParameters) => {
    setCameraParametersDialogDisplayed(false);
    onSetCameraParameters(cameraParameters);
  };

  const handleOnEditCameraParameters = () => {
    setCameraParametersDialogDisplayed(true);
  };

  return (
    <div className={styles.main}>
      <SidePanel
        calculating={calculating}
        fileLoaded={!!file}
        cameraParameters={cameraParameters}
        onEditCameraParameters={handleOnEditCameraParameters}
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
        onDisablePoint={onDisablePoint}
        onCalculateClick={onCalculateClick}
        heightCorrection={heightCorrection}
        onHeightCorrectionChange={onHeightCorrectionChange}
        file={file}
        adjustedCameraParams={adjustedCameraParams}
        calculatedCameraParams={calculatedCameraParams}
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
          adjustedCameraParams={adjustedCameraParams}
          calculatedCameraParams={calculatedCameraParams}
          selectedBaseLayer={selectedBaseLayer}
          selectedView={selectedView}
          onChangeBaseLayer={onChangeBaseLayer}
          onChangeView={onChangeView}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
          onSetAdjusted={on3DViewSetAdjusted}
          onMoveToAdjusted={on3DViewMoveToAdjusted}
          onMoveToCalculated={on3DViewMoveToCalculated}
        />
      </div>
      <EditPointDialog
        display={!!editedPoint}
        point={editingPoint}
        onSetPoint={(point) => {
          setEditedPoint(null);
          if (onSetPoint) {
            onSetPoint(point);
          }
        }}
        onDismiss={() => {
          setEditedPoint(null);
        }}
        onTransformCoord={onTransformCoord}
      />
      <EditCameraParametersDialog
        display={cameraParametersDialogDisplayed}
        cameraParameters={cameraParameters}
        onApply={handleOnApplyCameraParameters}
        onDismiss={() => {
          setCameraParametersDialogDisplayed(false);
        }}
      />
    </div>
  );
};
