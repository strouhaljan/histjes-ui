import React, { useState } from "react";

import { View } from "./infoSearchView/View";

export function InfoSearchPage({ objects }) {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onShowInMap = (identifier) => {
    alert(`Show object in map: ${identifier}`);
  };

  const [searchString, setSearchString] = useState("");

  const [selectedObjectIdentifier, setSelectedObjectIdentifier] = useState();

  const [selectedTab, setSelectedTab] = useState();

  const onTabSelected = (selectedTabKey) => setSelectedTab(selectedTabKey);

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      onSearch={setSearchString}
      searchString={searchString}
      objects={objects}
      selectedObjectIdentifier={selectedObjectIdentifier}
      onObjectDetailSelected={setSelectedObjectIdentifier}
      onShowInMap={onShowInMap}
      selectedTab={selectedTab}
      onTabSelected={onTabSelected}
    />
  );
}
