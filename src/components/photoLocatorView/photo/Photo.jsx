import React, { useMemo } from "react";
import { DefaultButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { FileUpload } from "./FileUpload";
import { ZoomControl } from "../../common/ZoomControl/ZoomControl";
import PhotoContainer from "../../photoLocatorState/photo/PhotoContainer";

import getStyles from "./styles";

const FitScreenButton = ({ onClick, styles }) => (
  <div className={styles.fitScreenButton}>
    <DefaultButton onClick={onClick} iconProps={{ iconName: "FitPage" }} />
  </div>
);

export const Photo = ({
  file,
  onAcceptFile,
  onZoomIn,
  onZoomOut,
  onFitScreen,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.photo}>
      {file ? (
        <div>
          <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
          <FitScreenButton onClick={onFitScreen} styles={styles} />
          <PhotoContainer file={file} />
        </div>
      ) : (
        <FileUpload onAcceptFile={onAcceptFile} />
      )}
    </div>
  );
};
