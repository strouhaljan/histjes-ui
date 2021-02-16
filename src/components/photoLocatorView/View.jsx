import React from "react";

import { SidePanel } from "./sidePanel/SidePanel";
import { Photo } from "./photo/Photo";
import { Map } from "./map/Map";

import "./styles.scss";

export const View = ({ onBackHomeClick }) => {
  return (
    <div className="main">
      <SidePanel onBackHomeClick={onBackHomeClick} />
      <div className="locator">
        <Photo />
        <Map />
      </div>
    </div>
  );
};
