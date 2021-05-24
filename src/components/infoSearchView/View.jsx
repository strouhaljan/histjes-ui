import React, { useMemo, useCallback } from "react";
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
import { ObjectDetailPanel } from "../common/ObjectDetailPanel";

import getStyles from "./styles";
import { ObjectCard } from "./ObjectCard";

export const View = ({
  onBackHomeClick,
  onSearch,
  objects,
  selectedObjectIdentifier,
  onObjectDetailSelected,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const onObjectDetailsClosed = useCallback(() => {
    onObjectDetailSelected(null);
  }, []);

  const object = useMemo(
    () =>
      objects.find((object) => object.identifier === selectedObjectIdentifier),
    [objects, selectedObjectIdentifier]
  );

  return (
    <div className={styles.main}>
      <SidePanel onBackHomeClick={onBackHomeClick} onSearch={onSearch} />
      <div className={styles.content}>
        <div className={styles.objectCards}>
          {objects.map((object) => (
            <ObjectCard object={object} onSelect={onObjectDetailSelected} />
          ))}
        </div>
      </div>
      <ObjectDetailPanel object={object} onClose={onObjectDetailsClosed} />
    </div>
  );
};
