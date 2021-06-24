import React, { useMemo, useCallback } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { ObjectDetailPanel } from "../common/ObjectDetailPanel";

import getStyles from "./styles";
import { ObjectCard } from "./ObjectCard";
import { PhotoCard } from "./PhotoCard";
import { PhotoDetailPanel } from "../common/PhotoDetailPanel";

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
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

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

  const CardComponent = photosTabSelected ? PhotoCard : ObjectCard;
  const DetailPanelComponent = photosTabSelected
    ? PhotoDetailPanel
    : ObjectDetailPanel;

  return (
    <div className={styles.main}>
      <SidePanel
        onBackHomeClick={onBackHomeClick}
        onSearch={onSearch}
        searchString={searchString}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
      <div className={styles.content}>
        <div className={styles.objectCards}>
          {items.map((item) => (
            <CardComponent
              key={item.identifier}
              object={item}
              onSelect={onObjectDetailSelected}
              imgBaseUrl={imgBaseUrlPreview}
            />
          ))}
        </div>
      </div>
      <DetailPanelComponent
        object={selectedItem}
        onClose={onObjectDetailsClosed}
        onShowInMap={onShowInMap}
        imgBaseUrlFull={imgBaseUrlFull}
        imgBaseUrlPreview={imgBaseUrlPreview}
      />
    </div>
  );
};
