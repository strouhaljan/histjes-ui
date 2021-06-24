import React, { useState, useMemo, useCallback } from "react";
import { useTheme } from "@fluentui/react-theme-provider";
import { Portal } from "react-portal";
import Lightbox from "react-awesome-lightbox";

import getStyles from "./styles";

import "react-awesome-lightbox/build/style.css";

export const Photo = ({
  className,
  src,
  imgBaseUrlFull,
  imgBaseUrlPreview,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [displayLightbox, setDisplayLightbox] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showLightbox = useCallback(() => {
    setDisplayLightbox(true);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hideLightbox = useCallback(() => {
    setDisplayLightbox(false);
  });

  return (
    <>
      <img
        className={className}
        src={`${imgBaseUrlPreview}${src}`}
        onClick={showLightbox}
        alt=""
      />
      {displayLightbox && (
        <Portal>
          <div
            className={styles.photoWrapper}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
          >
            <Lightbox
              allowZoom={false}
              allowRotate={false}
              allowReset={false}
              image={`${imgBaseUrlFull}${src}`}
              onClose={hideLightbox}
            />
          </div>
        </Portal>
      )}
    </>
  );
};
