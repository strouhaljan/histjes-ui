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
          textAlign: "center",
          padding: "5rem",
          border: `4px dashed ${theme.palette.themePrimary}`,
          backgroundColor: theme.palette.themeLighterAlt,
          borderRadius: "3rem",
      },
      fileUploadContentDragging: {
          borderColor: `4px dashed ${theme.palette.themePrimary}`,
          backgroundColor: theme.palette.themeLighter,
      },
      icon: {
          fontSize: "5rem",
          color: theme.palette.themePrimary
      },
      text: {
          fontSize: "2rem",
          marginBottom: 0,
          color: theme.palette.themePrimary
      }
  });

export default getStyles;
