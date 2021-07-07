import React, { useMemo, useCallback } from "react";
import { Panel, PanelType, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const ObjectDate = ({ label, value, styles }) => {
  return (
    <div className={styles.objectDateWrapper}>
      <span className={`${styles.objectDateLabel} pointValueLabel`}>
        {label}
      </span>
      <span className={`${styles.objectDateValue} pointValue`}>{value}</span>
    </div>
  );
};

export const ObjectDetailPanel = ({
  object,
  onClose,
  onShowInMap,
  isLightDismiss = true,
  isBlocking = true,
  imgBaseUrlPreview,
  onShowGallery,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleOnShowInMap = useCallback(() => {
    onShowInMap(object.identifier);
  }, [object, onShowInMap]);

  const handleOnShowGallery = useCallback(() => {
    onShowGallery(object);
  }, [object, onShowGallery]);

  const onOuterClick = () => {};

  if (!object) {
    return null;
  }

  return (
    <Panel
      className={styles.detailPanel}
      isLightDismiss={isLightDismiss}
      isBlocking={isBlocking}
      headerText={object.name}
      isOpen={true}
      onDismiss={onClose}
      type={PanelType.medium}
      onOuterClick={onOuterClick}
    >
      <div className={styles.content}>
        <div className={styles.annotation}>
          <div className={styles.annotationText}>{object.annotation}</div>
          {onShowInMap && (
            <div className={styles.annotationActionButton}>
              <PrimaryButton
                onClick={handleOnShowInMap}
                text="Ukázat v Časomapě"
              />
            </div>
          )}
        </div>
        {object.img.length > 0 && (
          <div className={styles.imageWrapper}>
            <img
              onClick={handleOnShowGallery}
              className={styles.image}
              src={`${imgBaseUrlPreview}${object.img[0]}`}
              alt=""
            />
          </div>
        )}
        <div className={styles.objectData}>
          <div className={styles.objectDates}>
            <ObjectDate
              styles={styles}
              label={"vznik:"}
              value={object.yearBuilt}
            />
            <ObjectDate
              styles={styles}
              label={"zánik funkce:"}
              value={object.yearPerishFunction}
            />
            <ObjectDate
              styles={styles}
              label={"zánik fyzický:"}
              value={object.yearPerishPhysical}
            />
          </div>
          <div className={styles.objectLinks}>Odkaz:{object.link}</div>
        </div>
        <div className={styles.description}>{object.description}</div>
      </div>
    </Panel>
  );
};
