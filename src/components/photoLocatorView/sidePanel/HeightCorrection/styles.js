import { mergeStyleSets } from "@fluentui/react";

export const getStyles = () =>
  mergeStyleSets({
    heightCorrection: {
      margin: "0 .5rem",
      marginTop: "1rem",
    },
    inputField: {
      selectors: {
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "input[type=number]": {
          "-moz-appearance": "textfield",
        },
      },
    },
  });
