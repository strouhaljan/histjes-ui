import React, { useMemo } from "react";
import {
  PrimaryButton,
  DefaultButton,
  Icon,
  Separator,
} from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";
import { Points } from "./Points/Points";

import getStyles from "./styles";

const CalculateButton = ({ points, styles }) => (
  <PrimaryButton
    className={styles.calculateButton}
    disabled={points.length < 3}
    text="Přepočítat"
  />
);

const SectionSeparator = ({ icon, label, styles }) => (
  <Separator className={styles.sectionSeparator} alignContent="start">
    <div className={styles.sectionLabel}>
      <Icon className={styles.sectionIcon} iconName={icon} />
      <span className={styles.sectionText}>{label}</span>
    </div>
  </Separator>
);

export const SidePanel = ({
  fileLoaded,
  loadingDmt,
  points,
  onAddPoint,
  onBackHomeClick,
  onNewProject,
  onRemovePoint,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <Panel
      onBackHomeClick={onBackHomeClick}
      appTitle={"FotoUmisťovač"}
      customContentStyles={styles.panelContent}
    >
      <div className={styles.projectButtonsWrapper}>
        <DefaultButton
          className={styles.projectButton}
          onClick={onNewProject}
          text={"Nový projekt"}
          iconProps={{ iconName: "Add" }}
        />
        <DefaultButton
          className={styles.projectButton}
          onClick={() => {}}
          text={"Otevřít projekt"}
          iconProps={{ iconName: "OpenFolderHorizontal" }}
        />
      </div>
      {fileLoaded &&
        <>
          <SectionSeparator
            icon="BullseyeTargetEdit"
            label="Vlícovací body"
            styles={styles}
          />
          <Points
            loadingDmt={loadingDmt}
            points={points}
            onAddPoint={onAddPoint}
            onRemovePoint={onRemovePoint}
          />
          <SectionSeparator icon="Camera" label="Parametry" styles={styles} />
          <CalculateButton points={points} styles={styles} />
        </>
      }
    </Panel>
  );
};
