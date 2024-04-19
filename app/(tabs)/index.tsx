import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import { getApiConfiguration } from "@/store/homeSlice";
import { Button, ScrollView } from "tamagui";
import { ListItemWithImage } from "@/components/Card/ListCard";
import FlashListCarousel from "@/components/Carousel/FlashListCarousel";
import useFetch from "@/hooks/useFetch";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { url } = useSelector((state: any) => state.home);
  // const { data, loading } = useFetch("/movie/upcoming");
  const { data, loading } = useFetch("/movie/popular");
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    // apiCheck();
    // console.log("test", url.results);
    if (data) {
      setMovieData(data.results);
    }
  }, []);
  const apiCheck = () => {
    fetchDataFromAPI("/movie/popular").then((res: any) => {
      dispatch(getApiConfiguration(res));
    });
  };

  const popularMoviesCard = ({ item }: any) => {
    return (
      <ListItemWithImage
        title={item.original_title}
        subTitle={item.release_date}
        uri={item?.backdrop_path}
      />
    );
  };

  const renderPopularMovies = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      <FlashListCarousel data={movieData} renderItem={popularMoviesCard} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Movies :</Text>
      {renderPopularMovies()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
