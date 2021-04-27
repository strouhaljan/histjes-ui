import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme, index) =>
  mergeStyleSets({
    resultLabel: {
      fontWeight: "600",
      margin: ".5rem",
      selectors: {
        ":first-of-type": {
          marginTop: "0",
        },
      },
    },
    resultValueWrapper: {
      flex: "1 1 auto",
      width: "5rem",
      marginLeft: ".5rem",
      display: "flex",
    },
    resultValueLabel: {
      fontWeight: "bold",
    },
    resultValue: {
      marginLeft: ".25rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    resultValues: {
      display: "flex",
      margin: "0 .5rem",
      selectors: {
        ":first-of-type": {
          marginTop: 0,
        },
      },
    },
  });

export default getStyles;
