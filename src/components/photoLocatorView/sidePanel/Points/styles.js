import { mergeStyleSets } from "@fluentui/react";

export const getStyles = () =>
  mergeStyleSets({
    addButton: {
      padding: 0,
    },
  });

export const getPointStyles = (theme, index, point) =>
  mergeStyleSets({
    point: {
      padding: ".5rem .75rem",
      position: "relative",
      border: `1px solid ${theme.palette.neutralLight}`,
      borderTop: index === 0 ? "" : "none",
      borderLeft: `5px solid ${point.color}`,
      backgroundColor:
        index % 2 === 0
          ? theme.palette.neutralLighterAlt
          : theme.palette.neutralLight,
      selectors: {
        ":hover .editButtons": {
          display: "block",
        },
      },
    },
    icon: {
      alignSelf: "center",
      display: "block",
    },
    pointValueWrapper: {
      width: "5rem",
      marginLeft: ".5rem",
      display: "flex",
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
      marginTop: ".25rem",
    },
    editButtons: {
      display: "none",
      position: "absolute",
      right: 0,
      top: 0,
      fontSize: ".5rem",
    },
  });
