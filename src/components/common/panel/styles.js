import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    header: {
      backgroundColor: theme.palette.themePrimary,
      color: "#fff",
      textAlign: "center",
      position: "relative",
    },
    title: {
      fontSize: "2.25rem",
      fontFamily: `"Font", cursive`,
      fontWeight: "normal",
      marginTop: 0,
      marginBottom: "1.25rem",
    },
    subtitle: {
      marginBottom: 0,
      fontFamily: `"Font", cursive`,
      fontSize: "1.25rem",
      fontWeight: "normal",
    },
    appTitle: {
      fontSize: "0.85rem",
      position: "absolute",
      fontWeight: "bold",
      bottom: ".5rem",
      right: "1.5rem",
      color: "#9090c5",
      display: "block",
    },
    backButton: {
      border: "none",
      borderBottom: "1px solid #ebebf3",
    },
    content: {
      overflow: "auto",
      flex: "1 1 100%",
    },
  });

export default getStyles;
