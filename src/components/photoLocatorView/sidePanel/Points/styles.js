import { mergeStyleSets } from "@fluentui/react";

export const getStyles = (theme) =>
  mergeStyleSets({
    addButton: {
      marginTop: ".5rem",
      width: "7.5rem",
      padding: "0 .5rem",
      height: "1.75rem",
      flex: "0 0 auto",
    },
    points: {
      border: `1px solid ${theme.palette.neutralLight}`,
      minHeight: "4rem",
      overflow: "auto",
    },
  });

export const getPointStyles = (theme, index, point) =>
  mergeStyleSets({
    point: {
      position: "relative",
      selectors: {
        ":hover .editButtons": {
          display: "block",
        },
      },
    },
    pointDetails: {
      padding: ".5rem .75rem",
      position: "relative",
      borderLeft: `5px solid ${point.color}`,
      backgroundColor:
        index % 2 === 0
          ? theme.palette.neutralLighterAlt
          : theme.palette.neutralLight,
    },
    icon: {
      alignSelf: "center",
      display: "block",
    },
    pointValueWrapper: {
      flex: "1 1 auto",
      width: "5rem",
      marginLeft: ".5rem",
      display: "flex",
      selectors: {
        ":last-of-type": {
          width: "4rem",
        },
      },
    },
    pointValueLabel: {
      fontWeight: "bold",
    },
    pointValue: {
      marginLeft: ".25rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    pointValues: {
      display: "flex",
      marginTop: 0,
      selectors: {
        ":first-of-type": {
          marginTop: 0,
        },
      },
    },
    deviation: {
      color: theme.palette.neutralTertiary,
      selectors: {
        ".pointValueLabel": {
          fontWeight: "normal",
        },
      },
    },
    disabled: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      opacity: "0.75",
    },
  });
