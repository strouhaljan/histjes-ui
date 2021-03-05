import { mergeStyleSets } from "@fluentui/react";

export const getMapStyles = () =>
  mergeStyleSets({
    map: {
      position: "relative",
      flex: "1 1 50%",
      boxSizing: "border-box",
      borderLeft: "1px solid #ebebf3",
    },
  });

export const getMoveControlStyles = () =>
  mergeStyleSets({
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
      "&:nth-child(2)": {
        marginLeft: "-1px",
      },
    },
  });
