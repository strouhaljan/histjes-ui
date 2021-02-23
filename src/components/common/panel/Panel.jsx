import React, { useMemo } from "react";
import { ActionButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const BackHomeButton = ({ onClick }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <ActionButton
      className={styles.backButton}
      iconProps={{ iconName: "ChevronLeftSmall" }}
      onClick={onClick}
    >
      Zpět na rozcestník
    </ActionButton>
  );
};

export const Panel = ({
  onBackHomeClick,
  appTitle,
  children,
  customContentStyles = "",
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className="histjes-panel">
      <div className="histjes-panel-inner">
        <div className={styles.header}>
          <h2 className={styles.subtitle}>
            Virtuální knihovna zapomenuté historie
          </h2>
          <h1 className={styles.title}>Horské lesy Jeseníků</h1>
          <span className={styles.appTitle}>{appTitle}</span>
        </div>
        <BackHomeButton onClick={onBackHomeClick} />
        <div className={`${styles.content} ${customContentStyles}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
