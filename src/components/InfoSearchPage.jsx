import React, { useState } from "react";

import { View } from "./infoSearchView/View";

export function InfoSearchPage({ objects }) {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const [searchString, setSearchString] = useState("");

  const [selectedObjectIdentifier, setSelectedObjectIdentifier] = useState();

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      onSearch={setSearchString}
      searchString={searchString}
      objects={objects}
      selectedObjectIdentifier={selectedObjectIdentifier}
      onObjectDetailSelected={setSelectedObjectIdentifier}
    />
  );
}
