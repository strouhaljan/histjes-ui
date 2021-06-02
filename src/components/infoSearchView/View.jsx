import React, { useMemo, useCallback } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import { SidePanel } from "./sidePanel/SidePanel";
import { ObjectDetailPanel } from "../common/ObjectDetailPanel";

import getStyles from "./styles";
import { ObjectCard } from "./ObjectCard";

export const View = ({
  onBackHomeClick,
  onSearch,
  searchString,
  objects,
  selectedObjectIdentifier,
  onObjectDetailSelected,
  onShowInMap,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const onObjectDetailsClosed = useCallback(() => {
    onObjectDetailSelected(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const object = useMemo(
    () =>
      objects.find((object) => object.identifier === selectedObjectIdentifier),
    [objects, selectedObjectIdentifier]
  );

  return (
    <div className={styles.main}>
      <SidePanel
        onBackHomeClick={onBackHomeClick}
        onSearch={onSearch}
        searchString={searchString}
      />
      <div className={styles.content}>
        <div className={styles.objectCards}>
          {objects.map((object) => (
            <ObjectCard
              key={object.identifier}
              object={object}
              onSelect={onObjectDetailSelected}
            />
          ))}
        </div>
      </div>
      <ObjectDetailPanel
        object={object}
        onClose={onObjectDetailsClosed}
        onShowInMap={onShowInMap}
      />
    </div>
  );
};
