import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme, index) =>
  mergeStyleSets({
    points: {
      marginBottom: "1rem",
      flex: "1 0 18rem",
      overflow: "auto",
    },
    point: {
      padding: ".5rem .75rem",
      position: "relative",
      border: `1px solid ${theme.palette.neutralLight}`,
      borderTop: index === 0 ? "" : "none",
      backgroundColor:
        index % 2 === 0
          ? theme.palette.neutralLighterAlt
          : theme.palette.neutralLight,
      selectors: {
        ":hover .removeButton": {
          display: "block",
        },
      },
    },
    pointIndex: {},
    icon: {
      alignSelf: "center",
    },
    input: {
      width: "4.25rem",
      marginLeft: "1rem",
      selectors: {
        ".ms-Label": {
          marginRight: ".25rem",
          paddingLeft: ".25rem",
        },
        ".ms-TextField-field": {
          padding: "0",
          textAlign: "right",
          backgroundColor:
            index % 2 === 0
              ? theme.palette.neutralLighterAlt
              : theme.palette.neutralLight,
        },
      },
    },
    photo: {
      display: "flex",
    },
    map: {
      display: "flex",
    },
    removeButton: {
      display: "none",
      position: "absolute",
      right: 0,
      top: 0,
      fontSize: ".5rem",
    },
    addButton: {
      padding: 0,
    },
  });

export default getStyles;
