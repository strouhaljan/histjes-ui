import React, { useCallback, useMemo } from "react";
import classNames from "classnames";
import { Slider, Toggle } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import { LayerCheckbox } from "./LayerCheckbox";
import getStyles from "./styles";

const YearLabel = ({ enabled, year }) => (
  <>
    Technické objekty
    {enabled && (
      <>
        {" "}
        v roce <b>{year}</b>
      </>
    )}
  </>
);

export const ObjectsTimelineSlider = ({
  onObjectsYearChanged,
  onObjectsToggle,
  enabled,
  year,
  showObjectWithoutDate,
  onShowObjectsWithoutDateChanged,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleOnObjectsToggle = useCallback(
    (_event, state) => {
      onObjectsToggle(state);
    },
    [onObjectsToggle]
  );

  const handleOnShowObjectsToggle = useCallback((_e, checked) => {
    onShowObjectsWithoutDateChanged(checked);
  });

  const classes = classNames(styles.layersWrapper, styles.objectsLayerWrapper);

  return (
    <div>
      <div className={classes}>
        <LayerCheckbox
          label={<YearLabel enabled={enabled} year={year} />}
          checked={enabled}
          onChange={handleOnObjectsToggle}
        />
        {enabled && (
          <div className="layer-slider-wrapper">
            <Slider
              className={"histjes-map-panel-checkbox-slider"}
              showValue={false}
              min={1200}
              max={currentYear}
              value={year}
              styles={{
                root: { width: "13rem" },
                slideBox: { padding: 0 },
              }}
              onChange={onObjectsYearChanged}
            />
            <Toggle
              className={styles.toggle}
              defaultChecked
              onText="Zobrazit objekty bez datace"
              offText="Zobrazit objekty bez datace"
              onChange={handleOnShowObjectsToggle}
              checked={showObjectWithoutDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};
