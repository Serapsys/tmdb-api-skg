import { FunctionComponent, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  ListItem,
  YGroup,
  Image,
  SizableText,
  ScrollView,
  Text,
} from "tamagui";
import { useWindowDimensions } from "react-native";
import useFetch from "@/hooks/useFetch";
import FlashListCarousel from "../Carousel/FlashListCarousel";
import { ListItemWithImage } from "./ListCard";
import { useLocalSearchParams } from "expo-router";

interface DetailsProps {
  title: string;
  subTitle?: string;
  icon?: React.ComponentType<any>;
  data: any;
  uri: string;
}

export const MovieDetails: FunctionComponent<DetailsProps> = ({
  title,
  subTitle,
  uri,
  data,
}) => {
  const uriPath = `https://image.tmdb.org/t/p/w500${uri}`;
  const movieID = data?.id;
  const navParam = useLocalSearchParams();
  const { data: castData, loading } = useFetch(`/movie/${navParam.id}/credits`);
  const [castArr, setCastData] = useState([]);

  useEffect(() => {
    if (castData) {
      setCastData(castData.cast.slice(0, 10));
    }
  }, [castData]);

  const { width: windowWidth } = useWindowDimensions();
  const imageWidth = windowWidth; // 40% of screen width

  const crewCard = ({ item }: any): React.ReactNode => {
    return (
      <ListItemWithImage
        title={item.original_name}
        subTitle={item.character}
        uri={item?.profile_path}
      />
    );
  };

  const renderCrewList = () => {
    if (movieID) {
      return (
        <FlashListCarousel data={castArr.slice(0, 10)} renderItem={crewCard} />
      );
    }
    return null;
  };

  return (
    <ScrollView>
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
        <SizableText theme="alt1" size="$3"></SizableText>
      </YGroup>
      <Text style={styles.textStyle}>Cast:</Text>
      {renderCrewList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2129",
    borderRadius: 0,
  },
  textStyle: {
    fontSize: 20,
    backgroundColor: "black",
  },
});
