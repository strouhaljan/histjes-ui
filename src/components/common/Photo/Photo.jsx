import React, { useState, useMemo, useCallback } from "react";
import { useTheme } from "@fluentui/react-theme-provider";
import { Portal } from "react-portal";
import Lightbox from "react-awesome-lightbox";

import getStyles from "./styles";

import "react-awesome-lightbox/build/style.css";

export const Photo = ({ className, src }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [displayLightbox, setDisplayLightbox] = useState(false);

  const showLightbox = useCallback(() => {
    setDisplayLightbox(true);
  });

  const hideLightbox = useCallback(() => {
    setDisplayLightbox(false);
  });

  return (
    <>
      <img className={className} src={src} onClick={showLightbox} />
      {displayLightbox && (
        <Portal>
          <div
            className={styles.photoWrapper}
            onMouseDown={(e) => {
              console.log("stooop");
              e.stopPropagation();
            }}
          >
            <Lightbox
              allowZoom={false}
              allowRotate={false}
              allowReset={false}
              image={src}
              onClose={hideLightbox}
            />
          </div>
        </Portal>
      )}
    </>
  );
};
