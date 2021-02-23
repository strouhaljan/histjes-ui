import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    projectButtonsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".25rem",
    },
    projectButton: { padding: "0 .5rem", flex: "1 1 auto" },
    panelContent: {
      display: "flex",
      flexDirection: "column",
      padding: "0.75rem",
    },
    calculateButton: {
      padding: "1.5rem 2rem",
      margin: 0,
      marginTop: "auto",
      width: "100%",
    },
    sectionSeparator: {
      marginTop: "1rem",
      selectors: {
        "::before": {
          backgroundColor: theme.palette.themeLighter,
        },
        "> div": {
          padding: "0 .5rem 0 .25rem",
        },
      },
    },
    sectionLabel: {
      display: "flex",
    },
    sectionIcon: {
      alignSelf: "center",
      fontSize: "1.25rem",
      color: theme.palette.themePrimary,
    },
    sectionText: {
      alignSelf: "center",
      marginLeft: ".5rem",
      fontSize: "1rem",
      color: theme.palette.themePrimary,
    },
  });

export default getStyles;
