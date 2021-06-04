import React, { useCallback } from "react";
import { Slider, Stack } from "@fluentui/react";

import { LayerCheckbox } from "./LayerCheckbox";

const stackTokens = { childrenGap: ".5rem" };

export const ObjectsTimelineSlider = ({
  min,
  max,
  onObjectsYearChanged,
  onObjectsToggle,
  enabled,
  year,
}) => {
  const handleOnObjectsToggle = useCallback(
    (_event, state) => {
      onObjectsToggle(state);
    },
    [onObjectsToggle]
  );
  const onYearChangeHandler = useCallback(
    (_event, selectedYear) => {
      onObjectsYearChanged(selectedYear);
    },
    [onObjectsYearChanged]
  );

  return (
    <div>
      <h4></h4>
      <Stack className="checkbox-stack-inner" tokens={stackTokens}>
        <div>
          <LayerCheckbox
            label={"Technické objekty"}
            checked={enabled}
            onChange={handleOnObjectsToggle}
          />
          {enabled && (
            <div className="layer-slider-wrapper">
              v roce {year}
              <Slider
                className={"histjes-map-panel-checkbox-slider"}
                // showValue={false}
                min={min}
                max={max}
                value={year}
                styles={{
                  // root: { width: "8rem" },
                  slideBox: { padding: 0 },
                }}
                onChanged={onYearChangeHandler}
              />
            </div>
          )}
        </div>
      </Stack>
    </div>
  );
};
