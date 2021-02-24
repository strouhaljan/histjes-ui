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
            setFile({fileName: file.name});
        };
        reader.readAsDataURL(file);
    }
  }

  const [points, setPoints] = useState([
    {
      identifier: uuidv4(),
      photo: {
        x: 9999,
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
  }

  const onChangeBaseLayer = (layerId) => {
    setBaseLayer(layerId);
  }

  const onChangeView = (viewId) => {
    setView(viewId);
  }

  const onZoomIn = () => {
    alert("ZoomIn");
  };

  const onZoomOut = () => {
    alert("ZoomOut");
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
      onRemovePoint={onRemovePoint}
      onChangeBaseLayer={onChangeBaseLayer}
      onChangeView={onChangeView}
      onZoomIn={onZoomIn}
      onZoomOut={onZoomOut}
/>
  );
};
