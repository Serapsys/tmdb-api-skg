import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
import { getApiConfiguration } from "@/store/homeSlice";
import { Button } from "tamagui";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { url } = useSelector((state: any) => state.home);
  useEffect(() => {
    apiCheck();
  }, []);
  const apiCheck = () => {
    fetchDataFromAPI("/movie/popular").then((res: any) => {
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{url.total_pages}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button>Tamagui</Button>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
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
