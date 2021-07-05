import React, { useState, useCallback } from "react";
import SimpleReactLightbox from "simple-react-lightbox";

import { View } from "./infoSearchView/View";

export function InfoSearchPage({ objects, photos }) {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onShowInMap = (identifier) => {
    alert(`Show object in map: ${identifier}`);
  };

  const [searchString, setSearchString] = useState("");

  const [selectedItemIdentifier, setSelectedItemIdentifier] = useState();

  const [selectedTab, setSelectedTab] = useState("");

  const onTabSelected = (selectedTabKey) => setSelectedTab(selectedTabKey);

  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const onSelectedPhotoChange = useCallback((identifier, checked) => {
    if (selectedPhotos.indexOf(identifier) === -1 && checked) {
      setSelectedPhotos([...selectedPhotos, identifier]);
    } else {
      setSelectedPhotos(selectedPhotos.filter((photo) => photo !== identifier));
    }
  });

  const onSelectAllPhotos = useCallback(() => {
    setSelectedPhotos(photos.map((photo) => photo.identifier));
  });

  const onResetPhotoSelection = useCallback(() => {
    setSelectedPhotos([]);
  });

  const imgBaseUrlFull = "/images/";
  const imgBaseUrlPreview = "/images/";

  return (
    <SimpleReactLightbox>
      <View
        onBackHomeClick={onBackHomeClick}
        onSearch={setSearchString}
        searchString={searchString}
        objects={objects}
        photos={photos}
        selectedItemIdentifier={selectedItemIdentifier}
        onObjectDetailSelected={setSelectedItemIdentifier}
        onShowInMap={onShowInMap}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
        imgBaseUrlFull={imgBaseUrlFull}
        imgBaseUrlPreview={imgBaseUrlPreview}
        onSelectedPhotoChange={onSelectedPhotoChange}
        onSelectAllPhotos={onSelectAllPhotos}
        onResetPhotoSelection={onResetPhotoSelection}
        selectedPhotos={selectedPhotos}
      />
    </SimpleReactLightbox>
  );
}
