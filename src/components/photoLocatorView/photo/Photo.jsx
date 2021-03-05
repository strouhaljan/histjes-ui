import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { FileUpload } from "./FileUpload";
import { ZoomControl } from "../../common/ZoomControl/ZoomControl";
import PhotoContainer from "../../photoLocatorState/photo/PhotoContainer";

import getStyles from "./styles";

export const Photo = ({ file, onAcceptFile, onZoomIn, onZoomOut }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.photo}>
      {file ? (
        <div>
          <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
          <PhotoContainer file={file} />
        </div>
      ) : (
        <FileUpload onAcceptFile={onAcceptFile} />
      )}
    </div>
  );
};
