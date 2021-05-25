import React from "react";
import { Checkbox } from "@fluentui/react";

export const LayerCheckbox = ({ label, checked, onChange }) => (
  <Checkbox label={label} checked={checked} onChange={onChange} />
);
