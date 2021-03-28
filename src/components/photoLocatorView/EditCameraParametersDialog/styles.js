import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    dialog: {
      selectors: {
        ".ms-Dialog-main": {
          width: "20rem",
          minHeight: 0,
          maxWidth: "initial",
        },
        ".ms-Dialog-inner": {
          paddingBottom: "1.25rem",
        },
        ".ms-Dialog-actions": {
          marginTop: "1.5rem",
        },
      },
    },
    input: {
      display: "flex",
      marginTop: ".25rem",
      selectors: {},
    },
    inputLabel: {
      alignSelf: "center",
      textAlign: "right",
      paddingRight: ".5rem",
      flex: "1 0 auto",
      boxSizing: "border-box",
    },
    inputFieldWrapper: {
      flex: "0 0 7rem",
    },
  });

export default getStyles;
