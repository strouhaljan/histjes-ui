import { mergeStyleSets } from "@fluentui/react";

export const getStyles = () =>
  mergeStyleSets({
    editButtons: {
      display: "none",
      position: "absolute",
      right: 0,
      top: 0,
      fontSize: ".5rem",
      selectors: {
        ".ms-Button": {
          padding: 0,
          width: "1.25rem",
        },
        ".ms-Icon": {
          fontSize: ".85rem",
        },
        "&.visible": {
          display: "block",
        },
      },
    },
  });
