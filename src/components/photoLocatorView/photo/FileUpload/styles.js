import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    fileUploadWrapper: {
      display: "flex",
      width: "100%",
    },
    fileUpload: {
      margin: "auto",
    },
    fileUploadContent: {
      margin: "auto",
      textAlign: "center",
      padding: "5rem",
      border: `4px dashed ${theme.palette.themePrimary}`,
      borderRadius: "3rem",
      cursor: "pointer",
      outline: "none",
      selectors: {
        ":hover": { backgroundColor: theme.palette.themeLighterAlt },
      },
    },
    fileUploadContentDragging: {
      borderColor: `4px dashed ${theme.palette.themePrimary}`,
      backgroundColor: theme.palette.themeLighterAlt,
    },
    icon: {
      fontSize: "5rem",
      color: theme.palette.themePrimary,
    },
    text: {
      fontSize: "2rem",
      marginBottom: 0,
      color: theme.palette.themePrimary,
    },
  });

export default getStyles;
