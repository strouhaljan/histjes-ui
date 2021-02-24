import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { FileUpload } from "./FileUpload";

import getStyles from "./styles";

const Canvas = ({ file }) => `Canvas ${file ? file.fileName : ''}`;

export const Photo = ({ file, onAcceptFile }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.photo}>
      {file ? <Canvas file={file} /> : <FileUpload onAcceptFile={onAcceptFile} />}
    </div>
  );
};
