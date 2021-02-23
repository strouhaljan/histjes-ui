import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    map: {
      position: "relative",
      flex: "1 1 50%",
      boxSizing: "border-box",
      borderLeft: "1px solid #ebebf3",
    },
  });

export default getStyles;
