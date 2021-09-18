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
      display: "flex",
      selectors: {
        "> div": {
          flex: "1 1 auto",
          selectors: {
            "> span": {
              flex: "1 1 auto",
            },
          },
        },
        ".ms-Button": {
          padding: "0 .25rem",
          flex: "1 1 auto",
        },
        ".ms-Button-textContainer": {
          flexGrow: 0,
        },
        ".ms-Button-label": {
          margin: 0,
        },
        ".ms-Button-icon": {
          marginRight: ".5rem",
        },
        ".ms-Button-menuIcon": {
          marginLeft: ".5rem",
          fontSize: "0.75rem",
        },
      },
    },
    panelContent: {
      display: "flex",
      flexDirection: "column",
      padding: "0.75rem",
    },
    calculateButtonWrapper: {
      marginTop: "auto",
    },
    calculateButton: {
      padding: "1.5rem 2rem",
      margin: 0,
      marginTop: "1rem",
      width: "100%",
    },
    sectionSeparatorWrapper: {
      position: "relative",
      padding: 0,
      margin: ".5rem 0",
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
    actionElements: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "2rem",
      display: "flex",
      paddingTop: ".25rem",
      paddingLeft: ".5rem",
      fontSize: ".9rem",
      backgroundColor: "#fff",
      color: theme.palette.themePrimary,
      cursor: "pointer",
      textAlign: "right",
      selectors: {
        ".addPointButton": {
          fontSize: "1rem",
          marginTop: ".2rem",
        },
      },
    },
    toggleCheckbox: {
      marginLeft: ".25rem",
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
