import { DEFAULT_ROW_HEIGHTS, mergeStyleSets } from "@fluentui/react";

const getStyles = (theme, index) =>
  mergeStyleSets({
    valueWrapper: {
      display: "flex",
      margin: ".5rem",
      display: "flex",
      selectors: {
        ":first-of-type": {
          marginTop: 0,
        },
      },
    },
    valueLabel: {
      flex: "1 0 auto",
      fontWeight: "600",
    },
    value: {
      textAlign: "right",
      flex: "0 0 8rem",
    },
  });

export default getStyles;
