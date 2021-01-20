import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    buttonArea: {},
    callout: {
      width: 500,
      backgroundColor: "#fff",
      padding: ".5rem",
    },
    referenceLayer: {
      position: "relative",
      width: "100%",
      height: "7rem",
      border: "2px solid #f4f4f8",
      boxSizing: "border-box",
      transition: "all .1s ease-in-out",
      backgroundSize: "contain",
      "&:hover": {
        borderColor: theme.palette.themePrimary,
      },
    },
    referenceLayerSelected: {
      borderColor: theme.palette.themePrimary,
    },
    referenceLayerLabel: {
      fontSize: "1.25rem",
      lineHeight: "1.25rem",
      padding: ".5rem",
      backgroundColor: "#fffb",
      width: "100%",
    },
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
