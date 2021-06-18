import React, { useMemo, useCallback } from "react";
import { Panel, PanelType, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Photo } from "../Photo";

import getStyles from "./styles";

export const PhotoDetailPanel = ({
  object,
  onClose,
  isLightDismiss = true,
  isBlocking = true,
  imgBaseUrlFull,
  imgBaseUrlPreview,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const onOuterClick = () => {};

  if (!object) {
    return null;
  }

  return (
    <Panel
      className={styles.detailPanel}
      isLightDismiss={isLightDismiss}
      isBlocking={isBlocking}
      headerText={`FOTO - ${object.name}`}
      isOpen={true}
      onDismiss={onClose}
      type={PanelType.medium}
      onOuterClick={onOuterClick}
    >
      <div className={styles.content}>
        <div className={styles.created}>
          Rok pořízení:{" "}
          <span className={styles.createdText}>{object.created}</span>
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
        <div className={styles.objectsOnPhoto}>
          <div className={styles.objectLinks}>
            Zachycené objekty: {object.objects.join(", ")}
          </div>
        </div>
        <div className={styles.description}>{object.description}</div>
        <div className={styles.objectData}>
          <div className={styles.objectLinks}>Zdroj: {object.source}</div>
          <div className={styles.objectLinks}>Odkaz: {object.link}</div>
        </div>
      </div>
    </Panel>
  );
};
