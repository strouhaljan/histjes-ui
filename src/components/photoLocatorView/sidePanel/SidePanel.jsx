import React, { useMemo } from "react";
import {
  PrimaryButton,
  Icon,
  Separator,
  Checkbox,
} from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";
import { Points } from "./Points";
import { Parameters } from "./Parameters";
import { HeightCorrection } from "./HeightCorrection";
import { Results } from "./Results";
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
        text={calculating ? "Přepočítávám..." : "Vypočítat"}
        onClick={onClick}
      />
    </div>
  );
};

const SectionSeparator = ({
  onToggle,
  enabled = true,
  icon,
  label,
  styles,
  action,
  actionIcon,
  iconClassName,
}) => (
  <div className={styles.sectionSeparatorWrapper}>
    <Separator className={styles.sectionSeparator} alignContent="start">
      <div className={styles.sectionLabel}>
        <Icon className={styles.sectionIcon} iconName={icon} />
        <span className={styles.sectionText}>{label}</span>
      </div>
    </Separator>
    <div className={styles.actionElements}>
      {enabled && action && (
        <Icon
          onClick={action}
          iconName={actionIcon}
          className={iconClassName}
        />
      )}
      {onToggle && (
        <div className={styles.toggleCheckbox}>
          <Checkbox checked={enabled} onChange={onToggle} />
        </div>
      )}
    </div>
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
  calculatedCameraParams,
  adjustedCameraParams,
  cameraParametersSectionEnabled,
  toggleCameraParametersSection,
  examples,
  onOpenExampleProject,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const onCameraParametersSectionToggle = (_e, enabled) =>
    toggleCameraParametersSection(enabled);

  const MAX_POINT_COUNT = 8;

  return (
    <Panel
      onBackHomeClick={onBackHomeClick}
      appTitle={"FotoUmisťovač"}
      customContentStyles={styles.panelContent}
    >
      <div className={styles.projectButtonsWrapper}>
        <NewProjectButton onClick={onNewProject} styles={styles} />
        <OpenProjectButton
          onClick={onOpenProject}
          styles={styles}
          examples={examples}
          onOpenExampleProject={onOpenExampleProject}
        />
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
            action={
              !loadingDmt && points.length < MAX_POINT_COUNT
                ? onAddPoint
                : undefined
            }
            actionIcon={"CircleAddition"}
            iconClassName={"addPointButton"}
          />
          <Points
            loadingDmt={loadingDmt}
            points={points}
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
            label="Parametry kamery pro výpočet"
            styles={styles}
            action={onEditCameraParameters}
            actionIcon={"Edit"}
            enabled={cameraParametersSectionEnabled}
            onToggle={onCameraParametersSectionToggle}
          />
          {cameraParametersSectionEnabled && (
            <Parameters
              parameters={cameraParameters}
              loadingDmt={loadingDmt}
              points={points}
              onAddPoint={onAddPoint}
              onRemovePoint={onRemovePoint}
              onEditPoint={onEditPoint}
            />
          )}
          {(calculatedCameraParams || adjustedCameraParams) && (
            <>
              <SectionSeparator
                icon="AllApps"
                label="Výsledky"
                styles={styles}
              />
              <Results
                calculatedCameraParams={calculatedCameraParams}
                adjustedCameraParams={adjustedCameraParams}
              />
            </>
          )}
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
