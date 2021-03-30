import React, { useMemo } from "react";
import { SpinButton } from "office-ui-fabric-react";

import { getStyles } from "./styles";

const spinButtonStyles = {
  spinButtonWrapper: {
    justifyContent: "flex-end",
    selectors: {
      "::after": {
        border: "none",
      },
    },
  },
  spinButtonWrapperFocused: {
    selectors: {
      "::after": {
        border: "none",
      },
    },
  },
  input: {
    flex: "0 0 8rem",
    minWidth: "initial",
    textAlign: "right",
  },
};

export const HeightCorrection = ({ value, onChange }) => {
  const styles = useMemo(() => getStyles(), []);

  return (
    <div className={styles.heightCorrection}>
      <SpinButton
        className={styles.inputField}
        styles={spinButtonStyles}
        value={value}
        inputProps={{ type: "number" }}
        label="Korekce výšky (m):"
        onChange={onChange}
      />
    </div>
  );
};
