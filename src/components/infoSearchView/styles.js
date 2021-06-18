import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    main: {
      minWidth: "1024px",
      display: "flex",
    },
    content: {
      width: "100%",
      height: "100vh",
      overflow: "auto",
    },
    objectCards: {
      paddingRight: "1rem",
      paddingBottom: "1rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(28rem, 1fr))",
    },
  });

export default getStyles;
