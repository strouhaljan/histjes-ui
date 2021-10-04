import React, { useMemo } from "react";
import { useBoolean } from "@uifabric/react-hooks";
import { DefaultButton, Modal, IconButton } from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import icon_1_1 from "../../../../assets/map_icons/1_1.png";
import icon_1_2 from "../../../../assets/map_icons/1_2.png";
import icon_1_3 from "../../../../assets/map_icons/1_3.png";
import icon_1_4 from "../../../../assets/map_icons/1_4.png";
import icon_2 from "../../../../assets/map_icons/2_1.png";
import icon_3 from "../../../../assets/map_icons/3_1.png";
import icon_5 from "../../../../assets/map_icons/5_1.png";
import icon_6 from "../../../../assets/map_icons/6_1.png";
import icon_7 from "../../../../assets/map_icons/7_1.png";
import icon_8 from "../../../../assets/map_icons/8_1.png";
import icon_9 from "../../../../assets/map_icons/9_1.png";
import icon_10 from "../../../../assets/map_icons/10_1.png";
import icon_11 from "../../../../assets/map_icons/11_1.png";
import icon_12 from "../../../../assets/map_icons/12_1.png";
import icon_13 from "../../../../assets/map_icons/13_1.png";
import icon_14 from "../../../../assets/map_icons/14_1.png";
import icon_15 from "../../../../assets/map_icons/15_1.png";
import icon_16 from "../../../../assets/map_icons/16_1.png";
import icon_17 from "../../../../assets/map_icons/17_1.png";

import { getStyles, getIconButtonStyles } from "./styles";

const LegendItem = ({ styles, name, icon }) => (
  <div className={styles.legendItem}>
    <img className={styles.legendIcon} src={icon} alt={name} />
    <span className={styles.legendLabel}>{name}</span>
  </div>
);

export const Help = () => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const iconButtonStyles = useMemo(() => getIconButtonStyles(theme), [theme]);
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

  return (
    <div className={styles.help}>
      <DefaultButton
        className={styles.button}
        onClick={showModal}
        iconProps={{ iconName: "Help" }}
      />
      <Modal
        isOpen={isModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={styles.modalContainer}
        scrollableContentClassName={styles.scrollableContent}
      >
        <div className={styles.modalHeader}>
          <div>Legenda</div>
          <IconButton
            styles={iconButtonStyles}
            iconProps={{ iconName: "Cancel" }}
            ariaLabel="Close popup modal"
            onClick={hideModal}
          />
        </div>
        <div className={styles.modalBody}>
          <LegendItem styles={styles} name="turistická chata" icon={icon_1_1} />
          <LegendItem styles={styles} name="lovecká chata" icon={icon_2} />
          <LegendItem
            styles={styles}
            name="kostel, kaple, poutní místo"
            icon={icon_3}
          />
          <LegendItem styles={styles} name="přístřešek, útulna" icon={icon_5} />
          <LegendItem styles={styles} name="vysílač" icon={icon_6} />
          <LegendItem styles={styles} name="větrná elektrárna" icon={icon_7} />
          <LegendItem styles={styles} name="vodní dílo" icon={icon_8} />
          <LegendItem styles={styles} name="mlýn" icon={icon_9} />
          <LegendItem styles={styles} name="štola, důlní dílo" icon={icon_10} />
          <LegendItem styles={styles} name="hrad, zřícenina" icon={icon_11} />
          <LegendItem styles={styles} name="mezník" icon={icon_12} />
          <LegendItem styles={styles} name="smírčí kříž" icon={icon_13} />
          <LegendItem styles={styles} name="osada" icon={icon_14} />
          <LegendItem styles={styles} name="vojenský objekt" icon={icon_15} />
          <LegendItem styles={styles} name="samota" icon={icon_16} />
          <LegendItem styles={styles} name="pomník, socha" icon={icon_17} />
          <br />
          <h4>Každá ikona může dle své datace nabývat 4 podob vyobrazení:</h4>
          <LegendItem
            styles={styles}
            name="bílé kolečko, tmavý obrázek – objekt je v daném roce funkční"
            icon={icon_1_1}
          />
          <LegendItem
            styles={styles}
            name="bílé kolečko, šedý obrázek – objekt je v daném roce nefunkční"
            icon={icon_1_2}
          />
          <LegendItem
            styles={styles}
            name="bílé kolečko, šedý obrázek, přeškrtlé – objekt v daném roce již
            neexistuje"
            icon={icon_1_4}
          />
          <LegendItem
            styles={styles}
            name="tmavé kolečko, bílý obrázek – objekt nemá dataci (nemá uveden rok
            vzniku)"
            icon={icon_1_3}
          />
        </div>
      </Modal>
    </div>
  );
};
