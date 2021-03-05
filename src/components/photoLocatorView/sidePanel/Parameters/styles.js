import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme, index) =>
  mergeStyleSets({
    inputField: {
      marginTop: ".5rem",
      selectors: {
        ":first-of-type": {
          marginTop: 0,
        },
      },
    },
  });

export default getStyles;
