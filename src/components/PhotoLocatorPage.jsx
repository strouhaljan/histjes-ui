import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { View } from "./photoLocatorView/View";

export const PhotoLocatorPage = () => {
  const [baseLayer, setBaseLayer] = useState("base_zm");
  const [view, setView] = useState("2D");
  const [file, setFile] = useState();

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
    },
  ]);

  const onRemovePoint = (identifier) => {
    setPoints([...points].filter((point) => point.identifier !== identifier));
  };

  const onAddPoint = () => {
    const newPoint = {
      identifier: uuidv4(),
      photo: {
        x: 0,
        y: 0,
      },
      map: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
    setPoints([...points, newPoint]);
  };

  const onNewProject = () => {
    setFile();
    setPoints([]);
  };

  const onOpenProject = (file) => {
    console.log(`Opened project: ${file?.name || "empty"}`);
  };

  const onSaveProject = (file) => {
    console.log(`Saved project: ${file?.name || "empty"}`);
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

  return (
    <View
      file={file}
      points={points}
      selectedBaseLayer={baseLayer}
      selectedView={view}
      onBackHomeClick={onBackHomeClick}
      onAcceptFile={onAcceptFile}
      onAddPoint={onAddPoint}
      onNewProject={onNewProject}
      onOpenProject={onOpenProject}
      onRemovePoint={onRemovePoint}
      onChangeBaseLayer={onChangeBaseLayer}
      onChangeView={onChangeView}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
      onPhotoZoomIn={onPhotoZoomIn}
      onPhotoZoomOut={onPhotoZoomOut}
    />
  );
};
