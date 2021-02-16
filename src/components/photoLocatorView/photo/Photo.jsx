import React from "react";
import { FileUpload } from "./FileUpload";

export const Photo = ({ isUploaded }) => {
  return (
    <div className="photo">{(isUploaded && "Photo") || <FileUpload />}</div>
  );
};
