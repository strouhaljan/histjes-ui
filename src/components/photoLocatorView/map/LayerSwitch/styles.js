import { mergeStyleSets } from "@fluentui/react";

const getStyles = (theme) =>
  mergeStyleSets({
    layerSwitch: {
        position: "absolute",
        top: "1rem",
        left: "7rem",
        zIndex: 99,
        display: "flex",
    },
    button: {
        minWidth: 0,
        flex: "0 0 50%",
        "&:nth-child(2)": {
            marginLeft: "-1px"
        },
    }
  });

export default getStyles;
