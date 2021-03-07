import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    photoWrapper: {
      display: "flex",
      width: "100%",
    },
    photo: {
      display: "flex",
      flex: "1 1 50%",
      boxSizing: "border-box",
      borderLeft: "1px solid #ebebf3",
    },
    fitScreenButton: {
      position: "absolute",
      top: "1rem",
      left: "7rem",
      zIndex: 99,
      width: "2.5rem",
      display: "flex",
      selectors: {
        ".ms-Button": {
          minWidth: 0,
        },
      },
    },
  });

export default getStyles;
