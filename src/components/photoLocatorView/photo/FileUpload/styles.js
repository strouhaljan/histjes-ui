import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    fileUploadWrapper: {
        display: "flex",
        width: "100%",
    },
    fileUpload: {
        cursor: "pointer",
        display: "flex",
        width: "100%",
        outline: "none"
    },
    fileUploadContent: {
      margin: "auto",
      textAlign: "center"
    },
    icon: {
      fontSize: "5rem",
      color: theme.palette.themePrimary
    },
    text: {
      fontSize: "2rem",
      color: theme.palette.themePrimary
    }
  });

export default getStyles;
