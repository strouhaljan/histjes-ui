import React, { useRef } from "react";
import { DefaultButton } from "office-ui-fabric-react";

export const SaveProjectButton = ({ styles, getProjectData, disabled }) => {
  const saveProjectLink = useRef(null);

  const onClick = () => {
    const projectData = getProjectData();
    const blob = new Blob([projectData]);
    const fileDownloadUrl = URL.createObjectURL(blob);

    if (saveProjectLink.current) {
      saveProjectLink.current.href = fileDownloadUrl;
      saveProjectLink.current.click();
    }
  };
  return (
    <div className={styles.projectButton}>
      <DefaultButton
        onClick={onClick}
        text={"Uložit"}
        disabled={disabled}
        iconProps={{ iconName: "Save" }}
      />
      <a
        ref={saveProjectLink}
        href={""}
        style={{ display: "none" }}
        download={"project.json"}
      />
    </div>
  );
};
