import React, { useMemo } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const ViewButton = ({iconName, viewId, selected, styles, onChangeView}) => {
  const handleChangeView = (viewId) => {
    if (onChangeView) {
      onChangeView(viewId);
    }
  }

  return selected
    ? <PrimaryButton
      className={styles.button}
      iconProps={{ iconName: iconName }}
      onClick={() => handleChangeView(viewId)}
    />
    : <DefaultButton
      className={styles.button}
      iconProps={{ iconName: iconName }}
      onClick={() => handleChangeView(viewId)}
    />;
}

export const ViewSwitch = ({ onChangeView, selectedView }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const VIEWES = [
    {iconName: 'Nav2DMapView', viewId: '2D'},
    {iconName: 'CubeShape', viewId: '3D'}
  ];

  return (
    <div className={`viewSwitch ${styles.viewSwitch}`}>
      {VIEWES.map(item => {
        return (
          <ViewButton
            key={item.viewId}
            iconName={item.iconName}
            viewId={item.viewId}
            selected={selectedView === item.viewId}
            styles={styles}
            onChangeView={onChangeView}
          />
        );
      })}
    </div>
  );
};
