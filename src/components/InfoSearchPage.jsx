import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

import { View } from "./infoSearchView/View";

export function InfoSearchPage({ objects }) {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onSearch = (searchString) => {
    console.log(`Search: ${searchString}`);
  };

  const [selectedObjectIdentifier, setSelectedObjectIdentifier] = useState();

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      onSearch={onSearch}
      objects={objects}
      selectedObjectIdentifier={selectedObjectIdentifier}
      onObjectDetailSelected={setSelectedObjectIdentifier}
    />
  );
}
