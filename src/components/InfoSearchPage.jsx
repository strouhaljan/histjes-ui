import React from "react";

import { View } from "./infoSearchView/View";

export function InfoSearchPage() {
  const onBackHomeClick = () => {
    alert("Back home clicked");
  };

  const onSearch = (searchString) => {
    console.log(`Search: ${searchString}`);
  };

  const objects = [
    {
      title: "Test object",
    },
    {
      title: "Another object",
    },
    {
      title: "Third object",
    },
    {
      title: "Fourth object",
    },
    {
      title: "Test object",
    },
    {
      title: "Another object",
    },
    {
      title: "Third object",
    },
    {
      title: "Fourth object",
    },
  ];

  return (
    <View
      onBackHomeClick={onBackHomeClick}
      onSearch={onSearch}
      objects={objects}
    />
  );
}
