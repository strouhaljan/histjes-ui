import React, { useCallback } from "react";
import { PivotItem, Pivot, TextField } from "@fluentui/react";

import { Panel } from "../../common/panel/Panel";

const SearchInput = ({ value, onChange }) => {
  const handleOnChange = useCallback(
    (_e, value) => onChange(value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <TextField
      label="Vyhledej (fulltext):"
      onChange={handleOnChange}
      value={value}
    />
  );
};

export const SidePanel = ({
  onBackHomeClick,
  onTabSelected,
  selectedTab,
  searchString,
  onSearch,
}) => {
  const handleOnTabClick = useCallback((item) => {
    onTabSelected(item.props.itemKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Panel onBackHomeClick={onBackHomeClick} appTitle={"InfoHledač"}>
      <Pivot
        styles={{
          root: { display: "flex" },
          link: { flex: "0 0 50%", margin: 0, padding: 0 },
          linkIsSelected: { flex: "0 0 50%", margin: 0, padding: 0 },
        }}
        selectedKey={selectedTab}
        onLinkClick={handleOnTabClick}
      >
        <PivotItem headerText="Objekty" itemKey="objects">
          <div className="tab">
            <SearchInput onChange={onSearch} value={searchString} />
          </div>
        </PivotItem>
        <PivotItem headerText="Foto" itemKey="photos">
          <div className="tab">
            <SearchInput onChange={onSearch} value={searchString} />
          </div>
        </PivotItem>
      </Pivot>
    </Panel>
  );
};
