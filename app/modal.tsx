import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { MovieDetails } from "@/components/Card/DetailsCard";

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const { id } = params;
  const { data, loading } = useFetch(`/movie/${id}`);

  return (
    !loading && (
      <View style={styles.container}>
        <MovieDetails
          title={data?.original_title || ""}
          uri={data?.backdrop_path || ""}
          subTitle={data?.overview}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
