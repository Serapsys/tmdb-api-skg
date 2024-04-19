import React from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
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
  return <FlatList horizontal data={data} renderItem={renderItem} />;
};

export default FlashListCarousel;
