import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    main: {
      minWidth: "1024px",
      display: "flex",
      overflowY: "hidden",
    },
    locator: {
      display: "flex",
      flex: "1 1 auto",
      position: "relative",
      padding: 0,
    },
  });

export default getStyles;
