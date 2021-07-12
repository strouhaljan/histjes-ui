import React, { useMemo, useCallback } from "react";
import {
  Panel,
  PanelType,
  PrimaryButton,
  Icon
} from "@fluentui/react";
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
        {object?.img?.length > 0 && (
          <div onClick={handleOnShowGallery} className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={`${imgBaseUrlPreview}${object.img[0]}`}
              alt=""
            />
            <div className={styles.photoGalleryCountWrapper}>
              {object.img.length > 1 ? (
                <>
                  <Icon
                    className={styles.photoGalleryCountIcon}
                    iconName={"PhotoCollection"}
                  />
                  <span className={styles.photoGalleryCountLabel}>
                    {object.img.length}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        )}

        {object?.annotation ? (
          <>
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
          </>
        ) : null}

        {object?.yearBuilt ||
        object?.yearPerishFunction ||
        object?.yearPerishPhysical ? (
          <>
            <div className={styles.objectDates}>
              {object?.yearBuilt ? (
                <>
                  <ObjectDate
                    styles={styles}
                    label={"vznik:"}
                    value={object.yearBuilt}
                  />
                </>
              ) : null}
              {object?.yearPerishFunction ? (
                <ObjectDate
                  styles={styles}
                  label={"zánik funkce:"}
                  value={object.yearPerishFunction}
                />
              ) : null}
              {object?.yearPerishPhysical ? (
                <>
                  <ObjectDate
                    styles={styles}
                    label={"zánik fyzický:"}
                    value={object.yearPerishPhysical}
                  />
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {object?.description ? (
          <>
            <div className={styles.description}>{object.description}</div>
          </>
        ) : null}

        {object?.link?.length > 0 ? (
          <>
            <div className={styles.objectLinksWrapper}>
              <span className={styles.objectLinksLabel}>Zajímavé odkazy:</span>
              <div className={styles.objectLinks}>
                <ul>
                  {object.link.map((link) => (
                    <li>
                      - <a href={link}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </Panel>
  );
};
