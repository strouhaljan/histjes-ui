import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import classnames from "classnames";
import { FontIcon } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const FileUpload = () => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    maxFiles: 1,
  });

  return (
    <div className={styles.fileUploadWrapper}>
      <div className={styles.fileUpload}>
        <input {...getInputProps()} />
        <div
          {...getRootProps()}
          className={classnames(styles.fileUploadContent, {
            [styles.fileUploadContentDragging]: isDragActive,
          })}
        >
          <FontIcon className={styles.icon} iconName="CloudUpload" />
          <h2 className={styles.text}>Nahrejte fotografii</h2>
        </div>
      </div>
    </div>
  );
};
