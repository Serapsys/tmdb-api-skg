import { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { ListItem, YGroup, Image } from "tamagui";
import { useWindowDimensions } from "react-native";

interface ListItemProps {
  title: string;
  subTitle?: string;
  icon?: React.ComponentType<any>;
  uri: string;
}
export const ListItemWithImage: FunctionComponent<ListItemProps> = ({
  title,
  subTitle,
  uri,
}) => {
  const uriPath = `https://image.tmdb.org/t/p/w500${uri}`;

  const { width: windowWidth } = useWindowDimensions();
  const imageWidth = windowWidth * 0.4; // 40% of screen width
  return (
    <YGroup
      alignSelf="center"
      bordered
      //   width={imageWidth}
      style={styles.container}
      size="$4"
    >
      <Image source={{ uri: uriPath, width: imageWidth + 0.5, height: 180 }} />
      <ListItem
        hoverTheme
        style={{ width: imageWidth }}
        title={title}
        subTitle={subTitle}
      />
    </YGroup>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});
