import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { FileUpload } from "./FileUpload";
import PhotoContainer from "../../photoLocatorState/photo/PhotoContainer";

import getStyles from "./styles";

export const Photo = ({ file, onAcceptFile }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.photo}>
      {file
        ? <PhotoContainer file={file} />
        : <FileUpload onAcceptFile={onAcceptFile} />}
    </div>
  );
};
