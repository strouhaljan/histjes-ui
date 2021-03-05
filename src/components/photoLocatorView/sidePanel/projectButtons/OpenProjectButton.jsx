import React, { useRef } from "react";
import { DefaultButton } from "office-ui-fabric-react";

export const OpenProjectButton = ({ styles, onClick }) => {
  const fileUploadInput = useRef(null);
  const handleOpenProject = (e) => {
    onClick(e?.target?.files[0] || undefined);
  };
  const clickUpload = () => {
    if (fileUploadInput.current) {
      fileUploadInput.current.click();
    }
  };
  return (
    <div className={styles.projectButton}>
      <DefaultButton
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
