import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    selectionWrapper: {
      marginTop: "1rem",
    },
    selectionLabel: {
      fontWeight: "600",
    },
    selectionButtonsWrapper: {
      marginTop: ".25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: ".25rem",
    },
    selectionButton: {
      flex: "0 0 auto",
    },
    selectionButtonConfirm: {
      flex: "1 0 auto",
    },
  });

export default getStyles;
