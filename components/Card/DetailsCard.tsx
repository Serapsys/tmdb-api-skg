import { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { ListItem, YGroup, Image } from "tamagui";
import { useWindowDimensions } from "react-native";

interface DetailsProps {
  title: string;
  subTitle?: string;
  icon?: React.ComponentType<any>;
  uri: string;
}
export const MovieDetails: FunctionComponent<DetailsProps> = ({
  title,
  subTitle,
  uri,
}) => {
  const uriPath = `https://image.tmdb.org/t/p/w500${uri}`;

  const { width: windowWidth } = useWindowDimensions();
  const imageWidth = windowWidth; // 40% of screen width
  return (
    <YGroup alignSelf="center" bordered style={styles.container} size="$4">
      <Image source={{ uri: uriPath, width: imageWidth - 2, height: 400 }} />
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
  container: {},
});
