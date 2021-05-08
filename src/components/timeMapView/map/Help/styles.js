import { mergeStyleSets, FontWeights } from "@fluentui/react";

const modalHeight = "50rem";

export const getStyles = (theme) =>
  mergeStyleSets({
    help: {
      position: "absolute",
      top: "1rem",
      left: "14rem",
      zIndex: 99,
      width: "5rem",
      display: "flex",
    },
    button: {
      minWidth: 0,
      flex: "0 0 50%",
      "&:nth-child(2)": {
        marginLeft: "-1px",
      },
    },
    modalContainer: {
      width: "50rem",
      height: modalHeight,
      overflowY: "hidden",
    },
    modalHeader: [
      {
        flex: "1 1 auto",
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: "flex",
        alignItems: "center",
        fontWeight: FontWeights.semibold,
        padding: "1rem 1rem 1rem 2rem",
      },
    ],
    modalBody: {
      flex: "4 4 auto",
      padding: "0 2rem 2rem 2rem",
      textAlign: "justify",
      selectors: {
        p: { margin: "1rem 0" },
        "p:first-child": { marginTop: 0 },
        "p:last-child": { marginBottom: 0 },
      },
    },
    scrollableContent: {
      maxHeight: modalHeight,
    },
  });

export const getIconButtonStyles = (theme) => ({
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
});
