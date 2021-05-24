import { mergeStyleSets } from "@fluentui/react";

export const getStyles = (theme) =>
  mergeStyleSets({
    map: {
      position: "relative",
      flex: "1 1 50%",
      boxSizing: "border-box",
      borderLeft: "1px solid #ebebf3",
    },
    moveControl: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      zIndex: 99,
      width: "5rem",
      display: "flex",
    },
    button: {
      minWidth: 0,
      flex: "0 0 50%",
      "&:not(first-child)": {
        marginLeft: "-1px",
      },
    },
    savePositionButton: {
      position: "absolute",
      top: "1rem",
      left: "7rem",
      zIndex: 99,
      width: "auto",
    },
    disabledButton: {
      cursor: "default",
      backgroundColor: theme.palette.neutralLighter,
      selectors: {
        "&:hover": {
          cursor: "default",
          backgroundColor: theme.palette.neutralLighter,
        },
        ".ms-Button-icon": {
          color: theme.palette.neutralTertiary,
        },
      },
    },
    crossVertical: {
      position: "absolute",
      left: "50%",
      height: "100%",
      borderLeft: "1px dashed #bbb",
      pointerEvents: "none",
    },
    crossHorizontal: {
      position: "absolute",
      top: "50%",
      width: "100%",
      borderTop: "1px dashed #bbb",
      pointerEvents: "none",
    },
  });
