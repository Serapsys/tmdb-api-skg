import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, YGroup, Image, SizableText } from "tamagui";
import { useWindowDimensions } from "react-native";

interface DetailsProps {
  title: string;
  subTitle?: string;
  icon?: React.ComponentType<any>;
  data?: any;
  uri: string;
}
export const MovieDetails: FunctionComponent<DetailsProps> = ({
  title,
  subTitle,
  uri,
  data,
}) => {
  const uriPath = `https://image.tmdb.org/t/p/w500${uri}`;

  const { width: windowWidth } = useWindowDimensions();
  const imageWidth = windowWidth; // 40% of screen width
  return (
    <YGroup alignSelf="center" style={styles.container} size="$5">
      <Image source={{ uri: uriPath, width: imageWidth - 2, height: 400 }} />
      <ListItem
        hoverTheme
        style={{ width: imageWidth }}
        title={title}
        subTitle={`Release date: ${data?.release_date || ""}`}
      />
      <SizableText theme="alt1" size="$3">
        {subTitle}
      </SizableText>
    </YGroup>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2129",
    borderRadius: 0,
  },
});
