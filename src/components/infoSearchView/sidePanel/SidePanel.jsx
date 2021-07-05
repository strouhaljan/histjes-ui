import React, { useCallback, useMemo } from "react";
import {
  PivotItem,
  Pivot,
  TextField,
  DefaultButton,
  PrimaryButton,
  Separator,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { Panel } from "../../common/panel/Panel";

import getStyles from "./styles";

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
  onSelectAllPhotos,
  onResetPhotoSelection,
  selectedPhotosNumber,
  onShowSelected,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

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
            <Separator />
            <div className={styles.buttonsWrapper}>
              <DefaultButton onClick={onSelectAllPhotos} text={"Vybrat vše"} />
              <DefaultButton
                onClick={onResetPhotoSelection}
                text={"Zrušit výběr"}
              />
              <PrimaryButton
                onClick={onShowSelected}
                text={`Zobrazit vybrané${
                  selectedPhotosNumber > 0 ? ` (${selectedPhotosNumber})` : ""
                }`}
                disabled={selectedPhotosNumber === 0}
              />
            </div>
          </div>
        </PivotItem>
      </Pivot>
    </Panel>
  );
};
