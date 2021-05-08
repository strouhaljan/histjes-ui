import React, { useState, useMemo } from "react";
import { Stack, DefaultButton, Callout } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

import layer_1_bg from "./assets/1840_voj.png";
import layer_2_bg from "./assets/1917_voj.png";
import layer_3_bg from "./assets/1930_voj.png";
import layer_4_bg from "./assets/2019_zagabed.png";

const referenceLayers = [
  {
    key: "b",
    identifier: "1840_voj",
    text: "1840 - II. vojenské mapování",
    bg: layer_1_bg,
  },
  {
    key: "c",
    identifier: "1917_voj",
    text: "1917 - III. vojenské mapování",
    bg: layer_2_bg,
  },
  {
    key: "d",
    identifier: "1930_voj",
    text: "1930 - III. vojenské mapování",
    bg: layer_3_bg,
  },
  {
    key: "e",
    identifier: "2019_zagabed",
    text: "2019 - Zabaged (vizualizace ZM10)",
    bg: layer_4_bg,
  },
];

export const ReferenceLayerSelect = ({ selectedLayer, onChanged }) => {
  const [isOpened, setIsOpened] = useState(false);
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const stackTokens = { childrenGap: ".5rem" };

  return (
    <div className="reference-layer-picker">
      <div className={styles.buttonArea}>
        <DefaultButton text="Podklad" onClick={() => setIsOpened(!isOpened)} />
      </div>
      {isOpened && (
        <Callout
          className={styles.callout}
          isBeakVisible={false}
          target={`.${styles.buttonArea}`}
          onDismiss={() => setIsOpened(false)}
        >
          <div className="reference-layer-picker-inner">
            <Stack className="checkbox-stack-inner" tokens={stackTokens}>
              {referenceLayers.map(({ key, identifier, text, bg }) => (
                <div
                  onClick={() => {
                    onChanged(identifier);
                  }}
                  key={key}
                  className={`${styles.referenceLayer} ${
                    identifier === selectedLayer
                      ? styles.referenceLayerSelected
                      : ""
                  }`}
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <div
                    className={`${styles.referenceLayerContent} ${
                      identifier === selectedLayer
                        ? styles.referenceLayerContentSelected
                        : ""
                    }`}
                  >
                    <div className={`${styles.referenceLayerLabel} label`}>
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </Stack>
          </div>
        </Callout>
      )}
    </div>
  );
};
