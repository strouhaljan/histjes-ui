import React from "react";
import { ObjectCard } from "../ObjectCard";

export const ObjectList = ({ objects, imgBaseUrlPreview, onSelect }) =>
  objects.map((object) => (
    <ObjectCard
      key={object.identifier}
      object={object}
      onSelect={onSelect}
      imgBaseUrlPreview={imgBaseUrlPreview}
    />
  ));
