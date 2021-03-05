import React, { useMemo, useCallback } from "react";
import classnames from "classnames";
import {
  Dialog,
  SpinButton,
  ComboBox,
  TextField,
  FontIcon,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  ChoiceGroup,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";

import getStyles from "./styles";

const PointInput = ({ label, value, onChange, styles }) => {
  const onChangeHandler = useCallback((_event, value) => {
    console.log("XX", value);
  }, []);

  return (
    <div className={styles.input}>
      <div className={styles.inputLabel}>{label}</div>
      <TextField
        className={styles.inputFieldWrapper}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const GpsPointInput = ({ label, value, onChange, styles }) => {
  const onChangeHandler = useCallback((_event, value) => {
    console.log("XX", value);
  }, []);

  return (
    <div className={styles.input}>
      <div className={styles.inputLabel}>{label}</div>
      <div
        className={classnames(styles.gpsInputField, styles.inputFieldWrapper)}
      >
        <TextField
          className={""}
          value={value.degrees}
          onChange={onChangeHandler}
          suffix="°"
        />
        <TextField
          className={""}
          value={value.minutes}
          onChange={onChangeHandler}
          suffix="'"
        />
        <TextField
          className={""}
          value={value.seconds}
          onChange={onChangeHandler}
          suffix={'"'}
        />
      </div>
    </div>
  );
};

const Option = ({ renderRadio, props, children }) => {
  return (
    <div>
      {renderRadio(props)}
      {children}
    </div>
  );
};

export const EditPointDialog = ({ display, point, onDismiss, onSetPoint }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const dialogContentProps = {
    showCloseButton: true,
    title: "Souřadnice bodu",
  };

  const options = [
    {
      key: "A",
      text: "S-JTSK (záporné hodnoty)",
      onRenderField: (props, renderRadio) => {
        return (
          <Option renderRadio={renderRadio} props={props}>
            <div className={styles.optionContent}>
              <PointInput styles={styles} label={"X:"} value={point?.map?.x} />
              <PointInput styles={styles} label={"Y:"} value={point?.map?.y} />
            </div>
          </Option>
        );
      },
    },
    {
      key: "B",
      text: "WGS 84 (desetinné číslo)",
      onRenderField: (props, renderRadio) => {
        return (
          <Option renderRadio={renderRadio} props={props}>
            <div className={styles.optionContent}>
              <PointInput
                styles={styles}
                label={"Zeměpisná délka:"}
                value={0}
              />
              <PointInput
                styles={styles}
                label={"Zeměpisná šířka:"}
                value={0}
              />
            </div>
          </Option>
        );
      },
    },
    {
      key: "C",
      text: "GPS (stupně, minuty, vteřiny)",
      onRenderField: (props, renderRadio) => {
        return (
          <Option renderRadio={renderRadio} props={props}>
            <div className={styles.optionContent}>
              <GpsPointInput
                styles={styles}
                label={"Zeměpisná šířka:"}
                value={{
                  degrees: 0,
                  minutes: 0,
                  seconds: 0,
                }}
              />
              <GpsPointInput
                styles={styles}
                label={"Zeměpisná délka:"}
                value={{
                  degrees: 0,
                  minutes: 0,
                  seconds: 0,
                }}
              />
            </div>
          </Option>
        );
      },
    },
  ];

  return (
    <Dialog
      className={styles.dialog}
      hidden={!display}
      onDismiss={onDismiss}
      dialogContentProps={dialogContentProps}
    >
      <ChoiceGroup defaultSelectedKey="A" options={options} />
      <DialogFooter>
        <PrimaryButton onClick={onSetPoint} text="Nastavit" />
        <DefaultButton onClick={onDismiss} text="Zrušit" />
      </DialogFooter>
    </Dialog>
  );
};
