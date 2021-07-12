import React, { useCallback, useEffect, useState } from "react";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import { ObjectDetailPanel } from "../common/ObjectDetailPanel";
import { SidePanel } from "./sidePanel/SidePanel";
import { Map } from "./map/Map";

import "./styles.scss";

export const View = ({
  onReferenceLayerChanged,
  onZoomIn,
  onZoomOut,
  onLayerSelected,
  onBackHomeClick,
  onLayerOpacityChange,
  onDetailCancel,
  onObjectClick,
  selectedObject,
  selectedBaseLayer,
  layers,
  objectsYear,
  objectsEnabled,
  onObjectsYearChanged,
  onObjectsToggle,
  imgBaseUrlFull,
  imgBaseUrlPreview,
  showObjectWithoutDate,
  onShowObjectsWithoutDateChanged,
}) => {

  const [galleryItems, setGalleryItems] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    if (galleryItems.length > 0) {
      openLightbox();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryItems]);

  const handleOnShowObjectGallery = useCallback(
    (object) => {
      const items = object.img.map((photo) => ({
        src: `${imgBaseUrlFull}${photo}`,
        thumbnail: `${imgBaseUrlPreview}${photo}`,
      }));
      setGalleryItems(items);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="histjes-main">
      <div className="histjes-panel">
        <SidePanel
          layers={layers}
          onBackHomeClick={onBackHomeClick}
          onLayerSelected={onLayerSelected}
          onLayerOpacityChange={onLayerOpacityChange}
          selectedObject={selectedObject}
          onDetailCancel={onDetailCancel}
          objectsYear={objectsYear}
          onObjectsYearChanged={onObjectsYearChanged}
          objectsEnabled={objectsEnabled}
          onObjectsToggle={onObjectsToggle}
          showObjectWithoutDate={showObjectWithoutDate}
          onShowObjectsWithoutDateChanged={onShowObjectsWithoutDateChanged}
        />
      </div>
      <div className="histjes-map">
        <Map
          selectedBaseLayer={selectedBaseLayer}
          onObjectClick={onObjectClick}
          onReferenceLayerChanged={onReferenceLayerChanged}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      </div>
      <ObjectDetailPanel
        object={selectedObject}
        onClose={onDetailCancel}
        isBlocking={false}
        isLightDismiss={false}
        imgBaseUrlFull={imgBaseUrlFull}
        imgBaseUrlPreview={imgBaseUrlPreview}
        onShowGallery={handleOnShowObjectGallery}
      />

      <SRLWrapper
        options={{
          lightboxTransitionSpeed: 0,
          buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showThumbnailsButton: false,
          },
        }}
        elements={galleryItems}
      />
    </div>
  );
};
