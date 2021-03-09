import React, { useMemo } from "react";
import { TextField } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

export const Parameters = ({
  focalLength,
  onFocalLengthChange,
  heightAboveGround,
  onHeightAboveGroundChange,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={""}>
      <TextField
        underlined
        className={styles.inputField}
        value={focalLength}
        label="Ohnisková vzdálenost:"
        type="number"
        suffix="mm"
        onChange={onFocalLengthChange}
      />
      <TextField
        underlined
        className={styles.inputField}
        value={heightAboveGround}
        label="Výška nad terénem:"
        type="number"
        suffix="m"
        onChange={onHeightAboveGroundChange}
      />
    </div>
  );
};
