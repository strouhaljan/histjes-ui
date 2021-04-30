import React, { useMemo } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const LayerButton = ({title, layerId, selected, styles, onChangeLayer}) => {
  const handleChangeLayer = (layerId) => {
    if (onChangeLayer) {
      onChangeLayer(layerId);
    }
  }

  return selected
    ? <PrimaryButton
      className={styles.button}
      onClick={() => handleChangeLayer(layerId)}
      text={title}
    />
    : <DefaultButton
      className={styles.button}
      onClick={() => handleChangeLayer(layerId)}
      text={title}
    />;
}

export const LayerSwitch = ({ selectedLayer, onChangeLayer }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const LAYERS = [
    {title: 'Mapa', layerId: 'base_zm'},
    {title: 'Orto', layerId: 'base_orto'},
    {title: 'Orto 50', layerId: 'base_orto_50'}
  ];

  return (
    <div className={`layerSwitch ${styles.layerSwitch}`}>
      {LAYERS.map(item => {
        return (
          <LayerButton
            key={item.layerId}
            title={item.title}
            layerId={item.layerId}
            selected={selectedLayer === item.layerId}
            styles={styles}
            onChangeLayer={onChangeLayer}
          />
        );
      })}
    </div>
  );
};
