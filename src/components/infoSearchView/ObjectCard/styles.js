import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    cardWrapper: {
      height: "15rem",
      padding: "1rem 0 0 1rem",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: theme.palette.neutralLighter,
      borderRadius: ".25rem",
      display: "flex",
      height: "100%",
      padding: "1.25rem",
      boxSizing: "border-box",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
    },
    imageWrapper: {
      display: "flex",
      flex: "0 0 7rem",
      padding: 0,
      paddingLeft: "1rem",
      margin: "0 auto",
    },
    image: {
      height: "7rem",
      width: "7rem",
    },
    objectTitle: {
      fontSize: "1.5rem",
      margin: 0,
    },
    objectAnnotation: {
      flex: "1 1 auto",
      maxHeight: "5rem",
      textAlign: "justify",
      overflow: "hidden",
    },
    footer: {
      marginTop: "auto",
    },
  });

export default getStyles;
