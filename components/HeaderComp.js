import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Header } from "react-native-elements";

const HeaderComp = (props) => {
  return (
    <Header
      centerComponent={<Text style={styles.headerTitle}>{props.title}</Text>}
      rightComponent={
        <Image
          style={{ width: 35, height: 35 }}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
});

export default HeaderComp;
