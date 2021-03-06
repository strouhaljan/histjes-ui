import React, { useMemo, useCallback } from "react";
import classNames from "classnames";
import { PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const ObjectCard = ({ object, imgBaseUrlPreview, onSelect }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleObjectDetailRequested = useCallback(() => {
    onSelect(object.identifier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [object]);

  return (
    <div className={styles.cardWrapper}>
      <div
        className={classNames(styles.card, styles.objectCard)}
        onClick={handleObjectDetailRequested}
      >
        <div className={styles.cardContent}>
          <h1 className={styles.title}>{object.name}</h1>
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
            <img
              className={styles.image}
              src={`${imgBaseUrlPreview}${object.img[0]}`}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};
