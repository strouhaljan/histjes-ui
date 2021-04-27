import React, { useEffect, useMemo, useCallback, useState } from "react";
import classnames from "classnames";
import {
  Dialog,
  TextField,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  ChoiceGroup,
  Separator,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
import getStyles from "./styles";

export const ObjectCard = ({ object }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        <h1 className={styles.headline}>{object.title}</h1>
        <p className={styles.description}>
          Lorem ipsum description of the object
        </p>
        <div className={styles.footer}>
          <PrimaryButton onClick={() => {}} text="Detail" />
        </div>
      </div>
    </div>
  );
};
