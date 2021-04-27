import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";
import {
  DefaultButton,
  DocumentCard,
  DocumentCardType,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
} from "@fluentui/react";

import { SidePanel } from "./sidePanel/SidePanel";

import getStyles from "./styles";
import { ObjectCard } from "./ObjectCard";

export const View = ({ onBackHomeClick, onSearch, objects }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div className={styles.main}>
      <SidePanel onBackHomeClick={onBackHomeClick} onSearch={onSearch} />
      <div className={styles.content}>
        <div className={styles.objectCards}>
          {objects.map((object) => (
            <ObjectCard object={object} />
          ))}
        </div>
      </div>
    </div>
  );
};
