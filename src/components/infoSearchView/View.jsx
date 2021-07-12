import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useTheme } from "@fluentui/react-theme-provider";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

import { SidePanel } from "./sidePanel/SidePanel";
import { ObjectDetailPanel } from "../common/ObjectDetailPanel";

import getStyles from "./styles";
import { ObjectList } from "./ObjectList";
import { PhotoList } from "./PhotoList";

export const View = ({
  onBackHomeClick,
  onSearch,
  searchString,
  objects,
  photos,
  selectedItemIdentifier,
  onObjectDetailSelected,
  onShowInMap,
  imgBaseUrlFull,
  imgBaseUrlPreview,
  selectedTab,
  onTabSelected,
  selectedPhotos,
  onSelectAllPhotos,
  onResetPhotoSelection,
  onSelectedPhotoChange,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const { openLightbox } = useLightbox();

  const onObjectDetailsClosed = useCallback(() => {
    onObjectDetailSelected(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const photosTabSelected = useMemo(
    () => selectedTab === "photos",
    [selectedTab]
  );

  const items = useMemo(
    () => (photosTabSelected ? photos : objects),
    [objects, photos, photosTabSelected]
  );

  const selectedItem = useMemo(
    () => items.find((item) => item.identifier === selectedItemIdentifier),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, selectedItemIdentifier, selectedTab]
  );

  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    if (galleryItems.length > 0) {
      openLightbox();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryItems]);

  const handleOnShowSelectedPhotos = useCallback(() => {
    const items = photos
      .filter((photo) => selectedPhotos.indexOf(photo.identifier) > -1)
      .map((photo) => ({
        src: `${imgBaseUrlFull}${photo.img}`,
        thumbnail: `${imgBaseUrlPreview}${photo.img}`,
        caption: photo.name,
      }));
    setGalleryItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPhotos, photos]);

  const handleOnShowObjectGallery = useCallback(
    (object) => {
      const items = object.img.map((photo) => ({
        src: `${imgBaseUrlFull}${photo}`,
        thumbnail: `${imgBaseUrlPreview}${photo}`,
      }));
      setGalleryItems(items);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedPhotos, photos]
  );

  return (
    <div className={styles.main}>
      <SidePanel
        onBackHomeClick={onBackHomeClick}
        onSearch={onSearch}
        searchString={searchString}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
        onSelectAllPhotos={onSelectAllPhotos}
        onResetPhotoSelection={onResetPhotoSelection}
        selectedPhotosNumber={selectedPhotos.length}
        onShowSelected={handleOnShowSelectedPhotos}
      />
      <div className={styles.content}>
        <div className={styles.objectCards}>
          {photosTabSelected ? (
            <PhotoList
              photos={items}
              selectedPhotos={selectedPhotos}
              onSelectedChange={onSelectedPhotoChange}
              imgBaseUrlFull={imgBaseUrlFull}
              imgBaseUrlPreview={imgBaseUrlPreview}
            />
          ) : (
            <ObjectList
              objects={items}
              onSelect={onObjectDetailSelected}
              imgBaseUrlPreview={imgBaseUrlPreview}
            />
          )}
        </div>
      </div>
      <ObjectDetailPanel
        object={selectedItem}
        onClose={onObjectDetailsClosed}
        onShowInMap={onShowInMap}
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
