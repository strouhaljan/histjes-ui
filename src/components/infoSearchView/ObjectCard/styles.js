import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    cardWrapper: {
      height: "15rem",
      padding: "1rem 0 0 1rem",
      boxSizing: "border-box",
    },
    cardContent: {
      backgroundColor: theme.palette.neutralLighter,
      borderRadius: ".25rem",
      display: "flex",
      height: "100%",
      padding: "1rem",
      boxSizing: "border-box",
    },
  });

export default getStyles;
