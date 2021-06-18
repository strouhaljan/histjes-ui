import React, { useMemo, useCallback } from "react";
import { Panel, PanelType, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Photo } from "../Photo";

import getStyles from "./styles";

export const ObjectDetailPanel = ({
  object,
  onClose,
  onShowInMap,
  isLightDismiss = true,
  isBlocking = true,
  imgBaseUrlFull,
  imgBaseUrlPreview,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleOnShowInMap = useCallback(() => {
    onShowInMap(object.identifier);
  }, [object, onShowInMap]);

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
        {object.img && (
          <div className={styles.imageWrapper}>
            <Photo
              className={styles.image}
              src={object.img}
              imgBaseUrlFull={imgBaseUrlFull}
              imgBaseUrlPreview={imgBaseUrlPreview}
            />
          </div>
        )}
        <div className={styles.description}>{object.description}</div>
      </div>
    </Panel>
  );
};
