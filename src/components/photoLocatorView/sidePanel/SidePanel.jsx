import React, { useMemo } from "react";
import { PrimaryButton, Icon, Separator } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";
import { Points } from "./Points";
import { Parameters } from "./Parameters";
import { NewProjectButton } from "./projectButtons/NewProjectButton";
import { OpenProjectButton } from "./projectButtons/OpenProjectButton";
import { SaveProjectButton } from "./projectButtons/SaveProjectButton";

import getStyles from "./styles";

const CalculateButton = ({ onClick, points, styles, calculating }) => (
  <PrimaryButton
    className={styles.calculateButton}
    disabled={(points.length < 3) || calculating}
    text={calculating ? "Přepočítávám..." : "Přepočítat"}
    onClick={onClick}
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
  calculating,
  heightAboveGround,
  fileLoaded,
  focalLength,
  loadingDmt,
  points,
  onAddPoint,
  onBackHomeClick,
  onNewProject,
  onOpenProject,
  getProjectData,
  onRemovePoint,
  onEditPoint,
  onCalculateClick,
  onLockPoint,
  onFocalLengthChange,
  onHeightAboveGroundChange
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <Panel
      onBackHomeClick={onBackHomeClick}
      appTitle={"FotoUmisťovač"}
      customContentStyles={styles.panelContent}
    >
      <SectionSeparator
        icon="ProjectCollection"
        label="Projekt"
        styles={styles}
      />
      <div className={styles.projectButtonsWrapper}>
        <NewProjectButton onClick={onNewProject} styles={styles} />
        <OpenProjectButton onClick={onOpenProject} styles={styles} />
        <SaveProjectButton
          getProjectData={getProjectData}
          styles={styles}
          disabled={!fileLoaded}
        />
      </div>
      {fileLoaded && (
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
            onEditPoint={onEditPoint}
            onLockPoint={onLockPoint}
          />
          <SectionSeparator icon="Camera" label="Parametry" styles={styles} />
          <Parameters
            focalLength={focalLength}
            heightAboveGround={heightAboveGround}
            loadingDmt={loadingDmt}
            points={points}
            onAddPoint={onAddPoint}
            onRemovePoint={onRemovePoint}
            onEditPoint={onEditPoint}
            onFocalLengthChange={onFocalLengthChange}
            onHeightAboveGroundChange={onHeightAboveGroundChange}
          />
          <CalculateButton
            calculating={calculating}
            points={points}
            styles={styles}
            onClick={onCalculateClick}
          />
        </>
      )}
    </Panel>
  );
};
