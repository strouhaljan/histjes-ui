import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    viewSwitch: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
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

export default getStyles;
