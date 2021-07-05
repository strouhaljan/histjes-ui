import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    buttonsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".25rem",
    },
  });

export default getStyles;
