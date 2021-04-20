import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    zoomControl: {
      marginLeft: "6rem",
    },
  });

export default getStyles;
