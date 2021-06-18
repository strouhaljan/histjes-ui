import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    layersWrapper: {
      paddingLeft: ".5rem",
      marginLeft: ".25rem",
    },
    objectsLayerWrapper: {
      marginTop: "1rem",
    },
    toggle: {
      marginTop: ".5rem",
    },
  });

export default getStyles;
