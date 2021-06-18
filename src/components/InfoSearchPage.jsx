import React, { useState } from "react";

import { View } from "./infoSearchView/View";

export function InfoSearchPage({ objects, photos }) {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onShowInMap = (identifier) => {
    alert(`Show object in map: ${identifier}`);
  };

  const [searchString, setSearchString] = useState("");

  const [selectedItemIdentifier, setSelectedItemIdentifier] = useState();

  const [selectedTab, setSelectedTab] = useState("");

  const onTabSelected = (selectedTabKey) => setSelectedTab(selectedTabKey);

  const imgBaseUrlFull = "/images/";
  const imgBaseUrlPreview = "/images/";

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      onSearch={setSearchString}
      searchString={searchString}
      objects={objects}
      photos={photos}
      selectedItemIdentifier={selectedItemIdentifier}
      onObjectDetailSelected={setSelectedItemIdentifier}
      onShowInMap={onShowInMap}
      selectedTab={selectedTab}
      onTabSelected={onTabSelected}
      imgBaseUrlFull={imgBaseUrlFull}
      imgBaseUrlPreview={imgBaseUrlPreview}
    />
  );
}
