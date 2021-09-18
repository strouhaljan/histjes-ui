import React, { useRef, useMemo } from "react";
import { DefaultButton } from "office-ui-fabric-react";

export const OpenProjectButton = ({
  styles,
  onClick,
  examples,
  onOpenExampleProject,
}) => {
  const fileUploadInput = useRef(null);
  const handleOpenProject = (e) => {
    onClick(e?.target?.files[0] || undefined);
    if (e && e.target) {
      e.target.value = null;
    }
  };

  const clickUpload = () => {
    if (fileUploadInput.current) {
      fileUploadInput.current.click();
    }
  };

  const examplesMenu = useMemo(() => {
    const items = examples?.map((example) => ({
      key: example.key,
      text: example.name,
      onClick: (_e, item) => {
        onOpenExampleProject(item.data);
      },
      data: example.data,
    }));
    return {
      items,
    };
  }, [examples, onOpenExampleProject]);

  return (
    <div className={styles.projectButton}>
      <DefaultButton
        split
        styles={{
          splitButtonDivider: {
            right: "21px",
          },
          splitButtonMenuButton: {
            width: "16px",
          },
        }}
        menuProps={examples && examplesMenu}
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
