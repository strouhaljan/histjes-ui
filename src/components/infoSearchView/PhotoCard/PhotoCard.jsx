import React, { useMemo, useCallback } from "react";
import { Checkbox } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Photo } from "../../common/Photo";

import getStyles from "./styles";

export const PhotoCard = ({
  photo,
  imgBaseUrlFull,
  imgBaseUrlPreview,
  isSelected,
  onChange,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnChange = useCallback((_event, checked) => {
    onChange(photo.identifier, checked);
  });

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.titleWrapper}>
            <Checkbox
              className={styles.checkbox}
              checked={isSelected}
              onChange={handleOnChange}
              label={photo.name}
              styles={{
                text: {
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  marginLeft: ".25rem",
                  marginTop: "-.125rem",
                  lineHeight: "1.5rem",
                },
              }}
            />
          </div>
          {photo.created && (
            <div className={styles.created}>
              Rok pořízení: <b>{photo.created}</b>
            </div>
          )}
          {photo.objects.length > 0 && (
            <div className={styles.objects}>
              Zachycené objekty: {photo.objects.join(", ")}
            </div>
          )}
          <div className={styles.source}>
            Zdroj: <i>{photo.source}</i>
          </div>
          <div className={styles.footer}></div>
        </div>
        <div className={styles.imageWrapper}>
          <Photo
            className={styles.image}
            src={photo.img}
            imgBaseUrlFull={imgBaseUrlFull}
            imgBaseUrlPreview={imgBaseUrlPreview}
          />
        </div>
      </div>
    </div>
  );
};
