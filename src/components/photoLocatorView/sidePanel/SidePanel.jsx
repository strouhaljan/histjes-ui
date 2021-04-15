import React, { useMemo } from "react";
import { PrimaryButton, Icon, Separator } from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";
import { Points } from "./Points";
import { Parameters } from "./Parameters";
import { HeightCorrection } from "./HeightCorrection";
import { NewProjectButton } from "./projectButtons/NewProjectButton";
import { OpenProjectButton } from "./projectButtons/OpenProjectButton";
import { SaveProjectButton } from "./projectButtons/SaveProjectButton";

import getStyles from "./styles";

const CalculateButton = ({ onClick, points, styles, calculating }) => {
  const usedPoints = points.reduce((previous, current) => {
    return !current.disabled ? previous + 1 : previous;
  }, 0);

  return (
    <div className={styles.calculateButtonWrapper}>
      <PrimaryButton
        className={styles.calculateButton}
        disabled={usedPoints < 3 || calculating}
        text={calculating ? "Přepočítávám..." : "Přepočítat"}
        onClick={onClick}
      />
    </div>
  );
};

const SectionSeparator = ({ icon, label, styles, action, actionIcon }) => (
  <div className={styles.sectionSeparatorWrapper}>
    <Separator className={styles.sectionSeparator} alignContent="start">
      <div className={styles.sectionLabel}>
        <Icon className={styles.sectionIcon} iconName={icon} />
        <span className={styles.sectionText}>{label}</span>
      </div>
    </Separator>
    {action && (
      <div className={styles.actionIcon}>
        <Icon onClick={action} iconName={actionIcon} />
      </div>
    )}
  </div>
);

export const SidePanel = ({
  calculating,
  cameraParameters,
  onEditCameraParameters,
  heightCorrection,
  onHeightCorrectionChange,
  file,
  fileLoaded,
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
  onDisablePoint,
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
        {fileLoaded && (
          <div className={styles.fileNameWrapper}>
            <span className={styles.fileNameLabel}>Snímek:</span>
            <span className={styles.fileName}>{file.fileName}</span>
          </div>
        )}
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
            onDisablePoint={onDisablePoint}
          />
          <HeightCorrection
            value={heightCorrection}
            onChange={onHeightCorrectionChange}
          />
          <SectionSeparator
            icon="Camera"
            label="Parametry kamery"
            styles={styles}
            action={onEditCameraParameters}
            actionIcon={"Edit"}
          />
          <Parameters
            parameters={cameraParameters}
            loadingDmt={loadingDmt}
            points={points}
            onAddPoint={onAddPoint}
            onRemovePoint={onRemovePoint}
            onEditPoint={onEditPoint}
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
