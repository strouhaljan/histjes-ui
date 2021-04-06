import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    projectButtonsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".25rem",
    },
    projectButton: {
      flex: "1 1 auto",
      selectors: {
        ".ms-Button": {
          padding: "0 .5rem",
          width: "100%",
        },
      },
    },
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
    sectionSeparatorWrapper: {
      position: "relative",
      padding: 0,
      margin: "1rem 0 .5rem",
      selectors: {
        ":first-of-type": {
          marginTop: 0,
        },
      },
    },
    sectionSeparator: {
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
      fontSize: ".9rem",
      color: theme.palette.themePrimary,
    },
    sectionText: {
      alignSelf: "center",
      marginLeft: ".25rem",
      fontSize: ".9rem",
      color: theme.palette.themePrimary,
    },
    actionIcon: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "2rem",
      width: "1.5rem",
      paddingTop: ".25rem",
      fontSize: ".9rem",
      backgroundColor: "#fff",
      color: theme.palette.themePrimary,
      cursor: "pointer",
      textAlign: "right",
    },
    fileNameWrapper: {
      margin: "0 .5rem",
      marginTop: ".5rem",
    },
    fileNameLabel: {
      fontWeight: 600,
    },
    fileName: {
      marginLeft: ".5rem",
    },
  });

export default getStyles;
