import React from "react";
import { PhotoCard } from "../PhotoCard";

export const PhotoList = ({
  photos,
  imgBaseUrlFull,
  imgBaseUrlPreview,
  selectedPhotos,
  onSelectedChange,
}) =>
  photos.map((photo) => (
    <PhotoCard
      key={photo.identifier}
      isSelected={selectedPhotos.indexOf(photo.identifier) > -1}
      photo={photo}
      onChange={onSelectedChange}
      imgBaseUrlFull={imgBaseUrlFull}
      imgBaseUrlPreview={imgBaseUrlPreview}
    />
  ));
