import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    zoomControl: {
      marginLeft: "7rem",
    },
  });

export default getStyles;
