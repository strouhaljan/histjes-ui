import React, { useMemo, useRef } from "react";
import {
  PrimaryButton,
  DefaultButton,
  Icon,
  Separator,
} from "office-ui-fabric-react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";
import { Points } from "./Points";
import { Parameters } from "./Parameters";

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

const OpenProjectButton = ({ styles, onOpenProject }) => {
  const fileUploadInput = useRef(null);
  const handleOpenProject = (e) => {
    onOpenProject(e?.target?.files[0] || undefined);
  };
  const clickUpload = () => {
    if (fileUploadInput.current) {
      fileUploadInput.current.click();
    }
  };
  return (
    <div>
      <DefaultButton
        className={styles.projectButton}
        type="file"
        onClick={clickUpload}
        text={"Otevřít"}
        iconProps={{ iconName: "OpenFolderHorizontal" }}
      />
      <input
        ref={fileUploadInput}
        style={{ display: "none" }}
        type="file"
        accept="application/json"
        onChange={handleOpenProject}
      />
    </div>
  );
};

export const SidePanel = ({
  fileLoaded,
  loadingDmt,
  points,
  onAddPoint,
  onBackHomeClick,
  onNewProject,
  onOpenProject,
  onRemovePoint,
  onEditPoint,
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
        <DefaultButton
          className={styles.projectButton}
          onClick={onNewProject}
          text={"Nový"}
          iconProps={{ iconName: "Add" }}
        />
        <OpenProjectButton onOpenProject={onOpenProject} styles={styles} />
        <DefaultButton
          className={styles.projectButton}
          onClick={() => {}}
          text={"Uložit"}
          disabled={!fileLoaded}
          iconProps={{ iconName: "Save" }}
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
          />
          <SectionSeparator icon="Camera" label="Parametry" styles={styles} />
          <Parameters
            loadingDmt={loadingDmt}
            points={points}
            onAddPoint={onAddPoint}
            onRemovePoint={onRemovePoint}
            onEditPoint={onEditPoint}
          />
          <CalculateButton points={points} styles={styles} />
        </>
      )}
    </Panel>
  );
};
