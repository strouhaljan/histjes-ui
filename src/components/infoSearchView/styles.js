import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    main: {
      minWidth: "1024px",
      display: "flex",
    },
    content: {
      width: "100%",
    },
    objectCards: {
      paddingRight: "1rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(25rem, 1fr))",
    },
  });

export default getStyles;
