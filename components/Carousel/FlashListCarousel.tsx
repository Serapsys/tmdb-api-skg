import React from "react";
import { FlashList } from "@shopify/flash-list";

interface Item {
  title: string;
}

interface FlashListCarouselProps {
  data: Item[];
  renderItem: any;
}

const FlashListCarousel: React.FC<FlashListCarouselProps> = ({
  data,
  renderItem,
}) => {
  return (
    data?.length > 0 && (
      <FlashList
        horizontal
        data={data}
        renderItem={renderItem}
        estimatedItemSize={10}
      />
    )
  );
};

export default FlashListCarousel;
