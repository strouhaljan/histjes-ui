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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const [focalLengthValid, setFocalLengthValid] = useState(true);

  const [sensorHeight, setSensorHeight] = useState(
    originalSensorDimensions.height
  );
  const [sensorHeightValid, setSensorHeightValid] = useState(true);

  const [sensorWidth, setSensorWidth] = useState(
    originalSensorDimensions.width
  );
  const [sensorWidthValid, setSensorWidthValid] = useState(true);

  const handleOnApply = useCallback(() => {
    onApply({
      focalLength: Math.round(focalLength * 100) / 100,
      sensorDimensions: {
        height: Math.round(sensorHeight * 100) / 100,
        width: Math.round(sensorWidth * 100) / 100,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focalLength, sensorHeight, sensorWidth]);

  const validate = useCallback((value, callback) => {
    callback(value.length === 0 || isNaN(value) ? false : true);
  }, []);

  const applyButtonDisabled =
    focalLengthValid === false ||
    sensorHeightValid === false ||
    sensorWidthValid === false;

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
            validate(value, setFocalLengthValid);
            setFocalLength(value);
          }}
          onBlur={() => {
            validate(focalLength, setFocalLengthValid);
          }}
          valid={focalLengthValid}
        />
        <PointInput
          styles={styles}
          label="Rozměry snímače:"
          suffix="&#11021; mm"
          value={sensorHeight}
          onChange={(value) => {
            validate(value, setSensorHeightValid);
            setSensorHeight(value);
          }}
          onBlur={() => {
            validate(sensorHeight, setSensorHeightValid);
          }}
          valid={sensorHeightValid}
        />
        <PointInput
          styles={styles}
          label=""
          suffix="&#11020; mm"
          value={sensorWidth}
          onChange={(value) => {
            validate(value, setSensorWidthValid);
            setSensorWidth(value);
          }}
          onBlur={() => {
            validate(sensorWidth, setSensorWidthValid);
          }}
          valid={sensorWidthValid}
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
