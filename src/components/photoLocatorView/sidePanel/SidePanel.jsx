import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";

import { Panel } from "../../common/panel/Panel";

export const SidePanel = ({ onBackHomeClick }) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"FotoUmisťovač"}>
      <PrimaryButton
        className="calculate"
        styles={{ root: { padding: "1.5rem 2rem", margin: "1rem" } }}
        text="Přepočítat"
      />
    </Panel>
  );
};
