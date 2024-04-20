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
  const {} = useFetch("/movies/popular");
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    if (data) {
      setMovieData(data.results.slice(0, 10));
    }
  }, [data]);

  // const apiCheck = () => {
  //   fetchDataFromAPI("/movie/popular").then((res: any) => {
  //     dispatch(getApiConfiguration(res));
  //   });
  // };

  const popularMoviesCard = ({ item }: any): React.ReactNode => {
    return (
      !loading && (
        <Link
          href={{
            pathname: "/Details",
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
    return (
      !loading && (
        <FlashListCarousel data={movieData} renderItem={popularMoviesCard} />
      )
    );
  };

  const renderTrendingMoview = () => {
    return (
      !loading && (
        <FlashListCarousel data={movieData} renderItem={popularMoviesCard} />
      )
    );
  };

  return (
    <View style={{}}>
      <Text style={styles.title}>Upcoming Movies :</Text>
      {data && renderPopularMovies()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
