import React, { useEffect, useMemo, useCallback, useState } from "react";
import classnames from "classnames";
import {
  Dialog,
  TextField,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
  ChoiceGroup,
  Separator,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
import getStyles from "./styles";

const PointInput = ({ label, value, onChange, styles, suffix }) => {
  const onChangeHandler = useCallback((_event, value) => {
    if (onChange) {
      if (!isNaN(value)) {
        onChange(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.input}>
      <div className={styles.inputLabel}>{label}</div>
      <TextField
        className={styles.inputFieldWrapper}
        value={value}
        onChange={onChangeHandler}
        suffix={suffix}
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

export const EditPointDialog = ({
  display,
  point,
  onDismiss,
  onSetPoint,
  onTransformCoord,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const [coordValues, setCoordValues] = useState(onTransformCoord({}));

  useEffect(() => {
    if (point) {
      setCoordValues(
        onTransformCoord({
          identifier: point.identifier,
          jtsk: [point.map.x, point.map.y],
          z: point.map.z,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [point]);

  const dialogContentProps = {
    showCloseButton: true,
    title: "Souřadnice bodu",
  };

  const modalProps = {
    className: styles.dialog,
  };

  const options = [
    {
      key: "A",
      text: "S-JTSK (záporné hodnoty)",
      onRenderField: (props, renderRadio) => {
        return (
          <Option renderRadio={renderRadio} props={props}>
            <div className={styles.optionContent}>
              <PointInput
                styles={styles}
                label={"X:"}
                value={coordValues.jtsk[0]}
                onChange={(value) => {
                  setCoordValues((current) => {
                    return {
                      ...current,
                      jtsk: [value, current.jtsk[1]],
                    };
                  });
                }}
              />
              <PointInput
                styles={styles}
                label={"Y:"}
                value={coordValues.jtsk[1]}
                onChange={(value) => {
                  setCoordValues((current) => {
                    return {
                      ...current,
                      jtsk: [current.jtsk[0], value],
                    };
                  });
                }}
              />
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
                value={coordValues.wgsDec[0]}
              />
              <PointInput
                styles={styles}
                label={"Zeměpisná šířka:"}
                value={coordValues.wgsDec[1]}
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
                  degrees: coordValues.wgsDMS[0],
                  minutes: coordValues.wgsDMS[1],
                  seconds: coordValues.wgsDMS[2],
                }}
              />
              <GpsPointInput
                styles={styles}
                label={"Zeměpisná délka:"}
                value={{
                  degrees: coordValues.wgsDMS[3],
                  minutes: coordValues.wgsDMS[4],
                  seconds: coordValues.wgsDMS[5],
                }}
              />
            </div>
          </Option>
        );
      },
    },
  ];

  const onSet = () => {
    if (onSetPoint) {
      onSetPoint({
        identifier: coordValues.identifier,
        map: {
          x: coordValues.jtsk[0],
          y: coordValues.jtsk[1],
          z: coordValues.z,
        },
      });
    }
  };

  return (
    <Dialog
      hidden={!display}
      onDismiss={onDismiss}
      dialogContentProps={dialogContentProps}
      modalProps={modalProps}
    >
      <ChoiceGroup defaultSelectedKey="A" options={options} />
      <Separator />
      <div className={styles.optionContent}>
        <PointInput
          styles={styles}
          label={"Nadmořská výška:"}
          value={coordValues.z}
          suffix={"m"}
          onChange={(value) => {
            setCoordValues((current) => {
              return {
                ...current,
                z: value,
              };
            });
          }}
        />
      </div>
      <DialogFooter>
        <PrimaryButton onClick={onSet} text="Nastavit" />
        <DefaultButton onClick={onDismiss} text="Zrušit" />
      </DialogFooter>
    </Dialog>
  );
};
