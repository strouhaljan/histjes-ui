import React from "react";
import { FontIcon, IconButton } from "@fluentui/react";

const cancelButtonStyles = {
  root: { position: "absolute", top: "1rem", right: "1.5rem" },
};

export const ObjectDetail = ({ object, onCancel }) => {
  if (!object) {
    return (
      <div className="object-detail empty">
        <FontIcon className="icon" iconName="POISolid" />
        <h2>Vyberte objekt na mapě</h2>
      </div>
    );
  }

  return (
    <div className="object-detail">
      <h2>{object.name}</h2>
      <IconButton
        styles={cancelButtonStyles}
        iconProps={{ iconName: "Cancel" }}
        title="Zpět"
        onClick={onCancel}
      />
      <p>{object.description}</p>
    </div>
  );
};
