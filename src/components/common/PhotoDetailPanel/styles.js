import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    detailPanel: {
      selectors: {
        ".ms-Panel-headerText": {
          fontSize: "2rem",
          lineHeight: "2.5rem",
        },
      },
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      textAlign: "justify",
    },
    annotation: {
      display: "flex",
      marginTop: "2rem",
      width: "100%",
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
      marginTop: "2rem",
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
    objectData: {
      display: "flex",
    },
    objectDateWrapper: {
      flex: "1 1 auto",
      marginTop: ".25rem",
      display: "flex",
    },
    objectDateLabel: {
      width: "7rem",
      fontWeight: "bold",
    },
    objectDateValue: {
      marginLeft: ".25rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    objectDates: {
      display: "flex",
      flexDirection: "column",
    },
  });

export default getStyles;
