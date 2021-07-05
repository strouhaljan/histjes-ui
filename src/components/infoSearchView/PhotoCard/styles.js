import { mergeStyleSets } from "@fluentui/react";
import { getCardStyles } from "../styles";

const getStyles = (theme) =>
  mergeStyleSets({
    ...getCardStyles(theme),
    imageWrapper: {
      display: "flex",
      flex: "0 0 11.5rem",
      height: "11.5rem",
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
    created: {
      marginTop: "1rem",
    },
    objects: {
      marginTop: ".5rem",
    },
    source: {
      marginTop: ".5rem",
    },
    footer: {
      marginTop: "auto",
    },
    titleWrapper: {
      display: "flex",
    },
    checkbox: {
      paddingTop: "0",
    },
  });

export default getStyles;
