import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { View } from "./photoLocatorView/View";

export const PhotoLocatorPage = () => {
  const [baseLayer, setBaseLayer] = useState("base_zm");
  const [view, setView] = useState("2D");
  const [file, setFile] = useState("xxx");
  const [cameraParameters, setCameraParameters] = useState({
    focalLength: 12,
    sensorDimensions: { height: 10, width: 5 },
  });

  const [heightCorrection, setHeightCorrection] = useState(0);

  const handleOnSetHeightCorrection = (_e, value) => {
    setHeightCorrection(value);
  };

  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onAcceptFile = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      let file = acceptedFiles[0];
      let reader = new FileReader();
      reader.onload = () => {
        setFile({ fileName: file.name });
      };
      reader.readAsDataURL(file);
    }
  };

  const [points, setPoints] = useState([
    {
      identifier: uuidv4(),
      color: "rgb(255, 0, 0)",
      lock: false,
      photo: {
        x: 9999,
        y: 123456789,
      },
      map: {
        x: 1.23456789,
        y: 0,
        z: 0,
      },
      deviation: {
        x: 1,
        y: 2,
        d: 3,
      },
      disabled: true,
    },
    {
      identifier: uuidv4(),
      color: "rgb(0, 255, 0)",
      lock: false,
      photo: {
        x: 0,
        y: 0,
      },
      map: {
        x: 0,
        y: 0,
        z: 0,
      },
      deviation: {
        x: 0,
        y: 0,
        d: 0,
      },
      disabled: false,
    },
    {
      identifier: uuidv4(),
      color: "rgb(0, 0, 255)",
      lock: false,
      photo: {
        x: 0,
        y: 0,
      },
      map: {
        x: 0,
        y: 0,
        z: 0,
      },
      deviation: {
        x: 10,
        y: 20,
        d: 30,
      },
      disabled: true,
    },
  ]);

  const onRemovePoint = (identifier) => {
    setPoints(points.filter((point) => point.identifier !== identifier));
  };

  const onAddPoint = () => {
    const newPoint = {
      identifier: uuidv4(),
      color: "rgb(0, 0, 255)",
      lock: false,
      disabled: false,
      photo: {
        x: 0,
        y: 0,
      },
      map: {
        x: 0,
        y: 0,
        z: 0,
      },
      deviation: {
        x: 9,
        y: 8,
        d: 7,
      },
    };
    setPoints([...points, newPoint]);
  };

  const onLockPoint = (identifier) => {
    const pointIndex = points.findIndex(
      (point) => point.identifier === identifier
    );
    const point = points[pointIndex];
    const newPoints = [...points];
    newPoints[pointIndex] = {
      ...point,
      lock: !point.lock,
    };
    setPoints(newPoints);
  };

  const onDisablePoint = (identifier) => {
    const pointIndex = points.findIndex(
      (point) => point.identifier === identifier
    );
    const point = points[pointIndex];
    const newPoints = [...points];
    newPoints[pointIndex] = {
      ...point,
      disabled: !point?.disabled,
    };
    setPoints(newPoints);
  };

  const onNewProject = () => {
    setFile();
    setPoints([]);
  };

  const onOpenProject = (file) => {
    console.log(`Opened project: ${file?.name || "empty"}`);
  };

  const getProjectData = () => {
    return "TEST DATA TO BE SAVED";
  };

  const onChangeBaseLayer = (layerId) => {
    setBaseLayer(layerId);
  };

  const onChangeView = (viewId) => {
    setView(viewId);
  };

  const onZoomIn = () => {
    alert("ZoomIn");
  };

  const onZoomOut = () => {
    alert("ZoomOut");
  };

  const onPhotoZoomIn = () => {
    alert("Photo ZoomIn");
  };

  const onPhotoZoomOut = () => {
    alert("Photo ZoomOut");
  };

  const onPhotoFitScreen = () => {
    alert("Photo FitScreen");
  };

  const on3DViewMoveForward = () => {
    alert("3D MoveForward");
  };

  const on3DViewMoveBack = () => {
    alert("3D MoveBack");
  };

  const onTransformCoord = (coordValues) => {
    return {
      identifier: coordValues.identifier || "",
      jtsk: coordValues.jtsk || [0, 0],
      wgsDec: coordValues.wgsDec || [0, 0],
      wgsDMS: coordValues.wgsDMS || [0, 0, 0, 0, 0, 0],
      z: coordValues.z || 0,
    };
  };

  return (
    <View
      file={file}
      points={points}
      selectedBaseLayer={baseLayer}
      selectedView={view}
      onBackHomeClick={onBackHomeClick}
      onAcceptFile={onAcceptFile}
      onAddPoint={onAddPoint}
      onRemovePoint={onRemovePoint}
      onLockPoint={onLockPoint}
      onDisablePoint={onDisablePoint}
      onNewProject={onNewProject}
      onOpenProject={onOpenProject}
      getProjectData={getProjectData}
      onChangeBaseLayer={onChangeBaseLayer}
      onChangeView={onChangeView}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onPhotoZoomIn={onPhotoZoomIn}
      onPhotoZoomOut={onPhotoZoomOut}
      onPhotoFitScreen={onPhotoFitScreen}
      on3DViewMoveBack={on3DViewMoveBack}
      on3DViewMoveForward={on3DViewMoveForward}
      onTransformCoord={onTransformCoord}
      cameraParameters={cameraParameters}
      onSetCameraParameters={setCameraParameters}
      heightCorrection={heightCorrection}
      onHeightCorrectionChange={handleOnSetHeightCorrection}
    />
  );
};
