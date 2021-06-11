import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    photoWrapper: {
      width: "100vw",
      height: "100vh",
      position: "absolute",
      left: 0,
      top: 0,
      selectors: {
        ".lb-container": {
          zIndex: "999999999",
        },
      },
    },
  });

export default getStyles;
