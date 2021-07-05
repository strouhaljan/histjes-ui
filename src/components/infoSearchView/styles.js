import { mergeStyleSets } from "@fluentui/react";

export const getCardStyles = (theme) =>
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
  });

const getStyles = (theme) =>
  mergeStyleSets({
    main: {
      minWidth: "1024px",
      display: "flex",
    },
    content: {
      width: "100%",
      height: "100vh",
      overflow: "auto",
    },
    objectCards: {
      paddingRight: "1rem",
      paddingBottom: "1rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(28rem, 1fr))",
    },
  });

export default getStyles;
