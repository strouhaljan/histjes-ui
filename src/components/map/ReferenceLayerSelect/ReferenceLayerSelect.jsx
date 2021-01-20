import React, { useState, useMemo } from "react";
import { Stack, DefaultButton, Callout } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

import layer_1_bg from "./assets/1840_voj.png";
import layer_2_bg from "./assets/1917_voj.png";
import layer_3_bg from "./assets/1930_voj.png";
import layer_4_bg from "./assets/2019_zagabed.png";

const referenceLayers = [
  { key: "a", text: "Orientační mapa", bg: "" },
  { key: "b", text: "1840 - II. vojenské mapování", bg: layer_1_bg },
  {
    key: "c",
    text: "1917 - III. vojenské mapování",
    bg: layer_2_bg,
  },
  {
    key: "d",
    text: "1930 - III. vojenské mapování",
    selected: true,
    bg: layer_3_bg,
  },
  {
    key: "e",
    text: "2019 - Zabaged (vizualizace ZM10)",
    bg: layer_4_bg,
  },
];

export const ReferenceLayerSelect = () => {
  const [isOpened, setIsOpened] = useState(false);
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const stackTokens = { childrenGap: ".5rem" };

  return (
    <div className="reference-layer-picker">
      <div className={styles.buttonArea}>
        <DefaultButton text="Mapa" onClick={() => setIsOpened(!isOpened)} />
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
              {referenceLayers.map(({ key, text, selected, bg }) => (
                <div
                  key={key}
                  className={`${styles.referenceLayer} ${
                    selected ? styles.referenceLayerSelected : ""
                  }`}
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <div
                    className={`${styles.referenceLayerContent} ${
                      selected ? styles.referenceLayerContentSelected : ""
                    }`}
                  >
                    <div className={styles.referenceLayerLabel}>{text}</div>
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
