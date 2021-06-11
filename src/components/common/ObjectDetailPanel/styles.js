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
      display: "flex",
      flexDirection: "row",
    },
    annotationText: {
      flex: "1 1 auto",
      textAlign: "justify",
    },
    annotationActionButton: {
      flex: "0 0 auto",
      marginLeft: "3rem",
    },
    imageWrapper: {
      maxHeight: "24rem",
      marginTop: "1.5rem",
      borderRadius: ".25rem",
      overflow: "hidden",
    },
    image: {
      objectFit: "cover",
      width: "100%",
    },
    description: {
      marginTop: "2rem",
      flex: "0 0 100%",
    },
  });

export default getStyles;
