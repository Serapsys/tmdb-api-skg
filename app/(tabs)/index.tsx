import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import { getApiConfiguration } from "@/store/homeSlice";
import { ListItemWithImage } from "@/components/Card/ListCard";
import FlashListCarousel from "@/components/Carousel/FlashListCarousel";
import useFetch from "@/hooks/useFetch";
import { Link } from "expo-router";

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
      setMovieData(data.results.slice(0, 20));
    }
  }, []);
  const apiCheck = () => {
    fetchDataFromAPI("/movie/popular").then((res: any) => {
      dispatch(getApiConfiguration(res));
    });
  };

  const popularMoviesCard = ({ item }: any) => {
    return (
      !loading && (
        <Link
          href={{
            pathname: "/modal",
            params: { id: item.id },
          }}
          asChild
        >
          <Pressable>
            {({ pressed }) => (
              <ListItemWithImage
                title={item.original_title}
                subTitle={item.release_date}
                uri={item?.backdrop_path}
              />
            )}
          </Pressable>
        </Link>
      )
    );
  };

  const renderPopularMovies = () => {
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      data && (
        <FlashListCarousel data={movieData} renderItem={popularMoviesCard} />
      )
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
    flexShrink: 1,
    flexGrow: 1,
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
