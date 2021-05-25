import React, { useMemo, useCallback } from "react";
import {
  PrimaryButton,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import icon_9_3 from "../../../assets/map_icons/9_3.png";

import getStyles from "./styles";

export const ObjectCard = ({ object, onSelect }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleObjectDetailRequested = useCallback(() => {
    onSelect(object.identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [object]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h1 className={styles.objectTitle}>{object.name}</h1>
          <p className={styles.objectAnnotation}>{object.annotation}</p>
          <div className={styles.footer}>
            <PrimaryButton
              onClick={handleObjectDetailRequested}
              text="Detail"
            />
          </div>
        </div>
        {object.img && (
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={icon_9_3} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
