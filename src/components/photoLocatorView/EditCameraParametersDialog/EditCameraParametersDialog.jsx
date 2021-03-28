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

const PointInput = ({ label, value, onChange, styles, prefix, suffix }) => {
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
        prefix={prefix}
        suffix={suffix}
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
          onChange={setFocalLength}
        />
        <PointInput
          styles={styles}
          label="Rozměry snímače:"
          suffix="&#11021; mm"
          value={sensorDimensions.height}
          onChange={(value) => {
            setSensorDimensions({
              height: value,
              width: sensorDimensions.width,
            });
          }}
        />
        <PointInput
          styles={styles}
          label=""
          suffix="&#11020; mm"
          value={sensorDimensions.width}
          onChange={(value) => {
            setSensorDimensions({
              height: sensorDimensions.height,
              width: value,
            });
          }}
        />
      </div>
      <DialogFooter>
        <PrimaryButton onClick={handleOnApply} text="Nastavit" />
        <DefaultButton onClick={onDismiss} text="Zrušit" />
      </DialogFooter>
    </Dialog>
  );
};
