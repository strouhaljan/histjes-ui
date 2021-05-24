import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    detailPanel: {
      selectors: {
        ".ms-Panel-headerText": {
          fontSize: "2rem",
          marginTop: ".5rem",
        },
      },
    },
    content: {
      display: "flex",
      marginTop: "2rem",
      flexWrap: "wrap",
      textAlign: "justify",
    },
    annotation: {
      flex: "0 0 50%",
      paddingRight: "1rem",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    },
    annotationText: {
      flex: "1 0 auto",
    },
    annotationActionButton: {
      margin: "auto 0",
    },
    image: {
      flex: "0 0 50%",
      height: "15rem",
      backgroundColor: "#ccc",
    },
    description: {
      marginTop: "2rem",
      flex: "0 0 100%",
    },
  });

export default getStyles;
