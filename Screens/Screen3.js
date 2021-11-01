import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, FlatList, View, Button, Image } from "react-native";
import HeaderComp from "../components/HeaderComp";

const images = [
  require("../assets/null.png"),
  require("../assets/steak.png"),
  require("../assets/fish.png"),
  require("../assets/vegetarian.png"),
];

const Third = (props) => {
  const [image, setImage] = useState(images.steak_dish);
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <HeaderComp back={true} title="APP - screen 3"></HeaderComp>
      <View style={styles.imageContainer}>
        <FlatList
          data={images}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={item} />;
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Navegar 2º Ecrã"
          color="black"
          onPress={() => props.navigation.navigate("Second")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 100,
    height: 100,
    margin: 25,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "lightgrey",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 50,
    flex: 1,
  },
});

export default Third;
