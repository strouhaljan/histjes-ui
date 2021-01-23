import React from "react";
import { Slider } from "@fluentui/react";

export const ObjectDetail = ({ object }) => {
  if (!object) {
    return (
      <div className="object-detail empty">
        <i class="ms-Icon ms-Icon--POISolid icon" aria-hidden="true"></i>
        <h2>Vyberte objekt na mapě</h2>
      </div>
    );
  }

  return (
    <div className="object-detail">
      <h2>{object.name}</h2>
      <p>{object.description}</p>
    </div>
  );
};
