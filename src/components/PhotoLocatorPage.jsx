import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { View } from "./photoLocatorView/View";

export const PhotoLocatorPage = () => {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

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

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      points={points}
      onAddPoint={onAddPoint}
      onRemovePoint={onRemovePoint}
    />
  );
};
