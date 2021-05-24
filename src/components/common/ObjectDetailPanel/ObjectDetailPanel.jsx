import React, { useMemo, useCallback, useState } from "react";
import {
  Panel,
  PanelType,
  // TextField,
  // DialogFooter,
  PrimaryButton,
  // DefaultButton,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
import getStyles from "./styles";

export const ObjectDetailPanel = ({ object, onClose }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  if (!object) {
    return null;
  }

  return (
    <Panel
      className={styles.detailPanel}
      isLightDismiss
      headerText={object.name}
      isOpen={true}
      onDismiss={onClose}
      type={PanelType.medium}
    >
      <div className={styles.content}>
        <div className={styles.annotation}>
          <div className={styles.annotationText}>{object.annotation}</div>
          <div className={styles.annotationActionButton}>
            <PrimaryButton onClick={() => {}} text="Ukázat v Časomapě" />
          </div>
        </div>
        <div className={styles.image}>image</div>
        <div className={styles.description}>{object.description}</div>
      </div>
    </Panel>
  );
};
