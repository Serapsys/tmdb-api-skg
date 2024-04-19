import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import useFetch from "@/hooks/useFetch";

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const { id } = params;
  const { data, loading } = useFetch(`/movie/${id}`);
  return (
    !loading && (
      <View style={styles.container}>
        <Text style={styles.title}>{data?.original_title}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
