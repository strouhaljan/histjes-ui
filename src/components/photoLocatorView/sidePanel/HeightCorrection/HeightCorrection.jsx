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

  const handleChange = (e) => {
    changeValue(parseInt(e.target.value));
  };

  const changeValue = (value) => {
    onChange(value);
  };

  const handleDecrement = (value) => {
    changeValue((parseInt(value) || 0) - 1);
  };

  const handleIncrement = (value) => {
    changeValue((parseInt(value) || 0) + 1);
  };

  return (
    <div className={styles.heightCorrection}>
      <SpinButton
        className={styles.inputField}
        styles={spinButtonStyles}
        value={value}
        inputProps={{ type: "number" }}
        label="Korekce výšky (m):"
        max={1000}
        onChange={handleChange}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </div>
  );
};
