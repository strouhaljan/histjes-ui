import React, { useMemo } from "react";
import { useTheme } from "@fluentui/react-theme-provider";

import MapContainer from "../../timeMapState/map/MapContainer";
import { ZoomControl } from "../../common/ZoomControl/ZoomControl";
import { ReferenceLayerSelect } from "./ReferenceLayerSelect";
import { HistorySlider } from "./HistorySlider";
import { Help } from "./Help";
import getStyles from "./styles";

export const Map = ({
  historyYear,
  selectedBaseLayer,
  onHistoryChanged,
  onObjectClick,
  onReferenceLayerChanged,
  onZoomIn,
  onZoomOut,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <div>
      <div style={{ height: "100vh", width: "100%", display: "flex" }}>
        <MapContainer onObjectClick={onObjectClick} />
      </div>
      <ReferenceLayerSelect
        selectedLayer={selectedBaseLayer}
        onChanged={onReferenceLayerChanged}
      />
      <ZoomControl
        className={styles.zoomControl}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
      />
      <Help />
      <HistorySlider value={historyYear} onChanged={onHistoryChanged} />
    </div>
  );
};
