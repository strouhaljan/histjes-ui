import React, { useCallback } from "react";
import { PivotItem, Pivot, TextField } from "@fluentui/react";

import { Panel } from "../../common/panel/Panel";

const SearchInput = ({ onChange }) => {
  const handleOnChange = useCallback(
    (_e, value) => onChange(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return <TextField label="Vyhledej (fulltext):" onChange={handleOnChange} />;
};

export const SidePanel = ({
  onBackHomeClick,
  onTabClick,
  selectedTab,
  onSearch,
}) => {
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"InfoHledač"}>
      <Pivot
        styles={{
          root: { display: "flex" },
          link: { flex: "0 0 33%", margin: 0, padding: 0 },
          linkIsSelected: { flex: "0 0 33%", margin: 0, padding: 0 },
        }}
        selectedKey={selectedTab}
        onLinkClick={onTabClick}
      >
        <PivotItem headerText="Objekty" itemKey="objects">
          <div className="tab">
            <SearchInput onChange={onSearch} />
          </div>
        </PivotItem>
        <PivotItem headerText="Jiná data" itemKey="otherdata">
          <div className="tab">
            <SearchInput onChange={onSearch} />
          </div>
        </PivotItem>
        <PivotItem headerText="Foto" itemKey="photos">
          <div className="tab">
            <SearchInput onChange={onSearch} />
          </div>
        </PivotItem>
      </Pivot>
    </Panel>
  );
};
