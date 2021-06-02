import React, { useMemo, useCallback } from "react";
import { Panel, PanelType, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
import getStyles from "./styles";

export const ObjectDetailPanel = ({ object, onClose, onShowInMap }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleOnShowInMap = useCallback(() => {
    onShowInMap(object.identifier);
  }, [object, onShowInMap]);

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
          {onShowInMap && (
            <div className={styles.annotationActionButton}>
              <PrimaryButton
                onClick={handleOnShowInMap}
                text="Ukázat v Časomapě"
              />
            </div>
          )}
        </div>
        <div className={styles.image}>image</div>
        <div className={styles.description}>{object.description}</div>
      </div>
    </Panel>
  );
};
