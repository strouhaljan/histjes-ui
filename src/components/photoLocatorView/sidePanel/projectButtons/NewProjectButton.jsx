import React from "react";
import { DefaultButton } from "office-ui-fabric-react";

export const NewProjectButton = ({ onClick, styles }) => {
  return (
    <div className={styles.projectButton}>
      <DefaultButton
        onClick={onClick}
        text={"Nový"}
        iconProps={{ iconName: "FabricNewFolder" }}
      />
    </div>
  );
};
