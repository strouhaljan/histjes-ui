import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    dialog: {
      selectors: {
        ".ms-Dialog-main": {
          width: "25rem",
          minHeight: 0,
          maxWidth: "initial",
        },
        ".ms-Dialog-inner": {
          paddingBottom: "1.25rem",
        },
        ".ms-Dialog-actions": {
          marginTop: "1.5rem",
        },
        ".ms-ChoiceField": {
          marginTop: "1.5rem",
          selectors: {
            ":first-of-type": {
              marginTop: ".5rem",
            },
          },
        },
        ".ms-ChoiceField-wrapper": {
          width: "100%",
        },
      },
    },
    icon: {
      alignSelf: "center",
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
      flex: "0 0 35%",
      boxSizing: "border-box",
    },
    inputFieldWrapper: {
      flex: "0 0 65%",
    },
    gpsInputField: {
      display: "flex",
      selectors: {
        ".ms-TextField-suffix": {
          padding: "0 .25rem",
        },
        ".ms-TextField": {
          marginLeft: ".25rem",
          selectors: {
            ":first-of-type": {
              marginLeft: 0,
            },
          },
        },
      },
    },
    optionContent: {
      display: "flex",
      flexDirection: "column",
      marginTop: ".5rem",
    },
  });

export default getStyles;
