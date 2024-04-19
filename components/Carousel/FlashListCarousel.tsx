import React from "react";
import { View, Text, StatusBar } from "react-native";
import { FlashList } from "@shopify/flash-list";

interface Item {
  title: string;
}

interface FlashListCarouselProps {
  data: Item[];
  renderItem: ({ item }: { item: Item }) => JSX.Element;
}

const FlashListCarousel: React.FC<FlashListCarouselProps> = ({
  data,
  renderItem,
}) => {
  return (
    <FlashList
      horizontal
      data={data}
      renderItem={renderItem}
      estimatedItemSize={20}
    />
  );
};

export default FlashListCarousel;
