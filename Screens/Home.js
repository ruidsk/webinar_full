import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HeaderComp from "../components/HeaderComp";

const Home = (props) => {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />

      <HeaderComp title="APP - screen 1"></HeaderComp>
      <View style={styles.title}>
        <Text style={{ fontSize: 25 }}> Computação Móvel </Text>
      </View>

      <View style={styles.container}>
        <Text> 1. Introdução à computação móvel </Text>
        <Text> 2. Conceitos básicos de computação móvel </Text>
        <Text> 3. Plataformas de computação móve </Text>
        <Text> 4. Aplicações para computação móvel </Text>
        <Text> 5. Aspetos avançados de computação móvel </Text>
        <Text> 6. Desenvolvimento de aplicações de computação móvel.</Text>
        <View style={styles.button}>
          <Button
            title="Navegar 2º Ecrã"
            color="black"
            onPress={() => props.navigation.navigate("Second")}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
  },
});

export default Home;
