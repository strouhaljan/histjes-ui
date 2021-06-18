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
      flex: "1 1 auto",
    },
    imageWrapper: {
      display: "flex",
      flex: "0 0 8rem",
      height: "8rem",
      marginLeft: "1rem",
      borderRadius: ".25rem",
      overflow: "hidden",
      border: `1px solid ${theme.palette.themeLighter}`,
    },
    image: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },
    objectTitle: {
      fontSize: "1.25rem",
      fontWeight: 400,
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
