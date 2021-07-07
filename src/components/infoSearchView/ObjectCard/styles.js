import { mergeStyleSets } from "@fluentui/react";
import { getCardStyles } from "../styles";

const getStyles = (theme) =>
  mergeStyleSets({
    ...getCardStyles(theme),
    objectCard: {
      cursor: "pointer",
      selectors: {
        "&:hover": {
          backgroundColor: theme.palette.neutralLight,
        },
      },
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
    objectAnnotation: {
      flex: "1 1 auto",
      maxHeight: "5rem",
      textAlign: "justify",
      overflow: "hidden",
    },
    footer: {
      marginTop: "auto",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: 400,
      margin: 0,
    },
  });

export default getStyles;
