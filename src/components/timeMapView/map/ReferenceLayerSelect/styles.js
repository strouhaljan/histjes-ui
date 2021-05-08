import { mergeStyleSets } from "@fluentui/react";

const referenceLayerLabel = mergeStyleSets({
  fontSize: "1.25rem",
  lineHeight: "1.25rem",
  padding: ".5rem",
  color: "#fff",
  backgroundColor: "#0008",
  width: "100%",
});

const getStyles = (theme) =>
  mergeStyleSets({
    buttonArea: {
      selectors: {
        ".ms-Button": {
          width: "6rem",
        },
      },
    },
    callout: {
      width: 500,
      backgroundColor: "#fff",
      padding: ".5rem",
      zIndex: 99,
    },
    referenceLayer: {
      cursor: "pointer",
      position: "relative",
      width: "100%",
      height: "7rem",
      border: "2px solid #fff",
      boxSizing: "border-box",
      transition: "all .1s ease-in-out",
      backgroundSize: "contain",
      "&:hover": {
        borderColor: theme.palette.themePrimary,
        ".label": {
          backgroundColor: theme.palette.themePrimary,
        },
      },
    },
    referenceLayerSelected: {
      borderColor: theme.palette.themePrimary,
      ".label": {
        backgroundColor: theme.palette.themePrimary,
      },
    },
    referenceLayerLabel,
    referenceLayerContent: {
      display: "flex",
      alignItems: "flex-end",
      position: "absolute",
      backgroundColor: "#fff5",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backdropFilter: "grayscale(.7)",
      "&:hover": {
        backdropFilter: "none",
        backgroundColor: "initial",
      },
    },
    referenceLayerContentSelected: {
      backdropFilter: "none",
      backgroundColor: "initial",
    },
  });

export default getStyles;
