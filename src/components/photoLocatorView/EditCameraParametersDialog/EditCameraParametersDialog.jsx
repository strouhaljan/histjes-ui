import React, { useMemo, useCallback, useState } from "react";
import {
  Dialog,
  TextField,
  DialogFooter,
  PrimaryButton,
  DefaultButton,
} from "@fluentui/react";
import { useTheme } from "@fluentui/react-theme-provider";
import getStyles from "./styles";

const PointInput = ({
  label,
  value,
  onChange,
  onBlur,
  styles,
  prefix,
  suffix,
  valid,
}) => {
  const onChangeHandler = useCallback((_event, value) => {
    onChange(value);
  }, []);

  return (
    <div className={styles.input}>
      <div className={styles.inputLabel}>{label}</div>
      <TextField
        className={styles.inputFieldWrapper}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
        prefix={prefix}
        suffix={suffix}
        errorMessage={!valid && "Zadejte číslo"}
      />
    </div>
  );
};

export const EditCameraParametersDialog = ({
  display,
  cameraParameters,
  onApply,
  onDismiss,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);

  const {
    focalLength: originalFocalLength,
    sensorDimensions: originalSensorDimensions,
  } = cameraParameters;

  const dialogContentProps = {
    showCloseButton: true,
    title: "Parametry kamery",
  };

  const modalProps = {
    className: styles.dialog,
  };

  const [focalLength, setFocalLength] = useState(originalFocalLength);
  const [sensorDimensions, setSensorDimensions] = useState(
    originalSensorDimensions
  );

  const handleOnApply = () => {
    onApply({
      focalLength,
      sensorDimensions,
    });
  };

  const [validState, setValidState] = useState({
    focalLength: true,
    sensorDimensionsHeight: true,
    sensorDimensionsWidth: true,
  });

  const setInputValidState = (inputStateKey, state) => {
    setValidState({ ...validState, [inputStateKey]: state });
  };

  const validate = (value, inputStateKey) => {
    if (value.length === 0 || isNaN(value)) {
      setInputValidState(inputStateKey, false);
    }
  };

  const applyButtonDisabled =
    validState.focalLength === false ||
    validState.sensorDimensionsHeight === false ||
    validState.sensorDimensionsWidth === false;

  const roundValue = (value) => {
    if (isNaN(value) || value.indexOf(".") === value.length - 1) {
      return value;
    }

    return Math.round(value * 100) / 100;
  };

  return (
    <Dialog
      hidden={!display}
      onDismiss={onDismiss}
      dialogContentProps={dialogContentProps}
      modalProps={modalProps}
    >
      <div className={styles.optionContent}>
        <PointInput
          styles={styles}
          label="Ohnisková vzdálenost:"
          value={focalLength}
          suffix="mm"
          onChange={(value) => {
            setInputValidState("sensorDimensionsHeight", true);
            setFocalLength(roundValue(value));
          }}
          onBlur={() => {
            validate(focalLength, "focalLength");
          }}
          valid={validState.focalLength}
        />
        <PointInput
          styles={styles}
          label="Rozměry snímače:"
          suffix="&#11021; mm"
          value={sensorDimensions.height}
          onChange={(value) => {
            setInputValidState("sensorDimensionsHeight", true);
            setSensorDimensions({
              height: roundValue(value),
              width: sensorDimensions.width,
            });
          }}
          onBlur={() => {
            validate(sensorDimensions.height, "sensorDimensionsHeight");
          }}
          valid={validState.sensorDimensionsHeight}
        />
        <PointInput
          styles={styles}
          label=""
          suffix="&#11020; mm"
          value={sensorDimensions.width}
          onChange={(value) => {
            setInputValidState("sensorDimensionsWidth", true);
            setSensorDimensions({
              height: sensorDimensions.height,
              width: roundValue(value),
            });
          }}
          onBlur={() => {
            validate(sensorDimensions.width, "sensorDimensionsWidth");
          }}
          valid={validState.sensorDimensionsWidth}
        />
      </div>
      <DialogFooter>
        <PrimaryButton
          disabled={applyButtonDisabled}
          onClick={handleOnApply}
          text="Nastavit"
        />
        <DefaultButton onClick={onDismiss} text="Zrušit" />
      </DialogFooter>
    </Dialog>
  );
};
