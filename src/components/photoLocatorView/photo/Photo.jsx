import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { FileUpload } from "./FileUpload";

import getStyles from "./styles";

const Canvas = ({ file }) => `Canvas ${file}`;

export const Photo = ({ file }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.photo}>
      {file ? <Canvas file={file} /> : <FileUpload />}
    </div>
  );
};
