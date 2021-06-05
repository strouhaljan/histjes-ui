import React, { useCallback, useMemo } from "react";
import classNames from "classnames";
import { Slider } from "@fluentui/react";
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
  min,
  max,
  onObjectsYearChanged,
  onObjectsToggle,
  enabled,
  year,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const handleOnObjectsToggle = useCallback(
    (_event, state) => {
      onObjectsToggle(state);
    },
    [onObjectsToggle]
  );

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
              min={min}
              max={max}
              value={year}
              styles={{
                root: { width: "13rem" },
                slideBox: { padding: 0 },
              }}
              onChange={onObjectsYearChanged}
            />
          </div>
        )}
      </div>
    </div>
  );
};
