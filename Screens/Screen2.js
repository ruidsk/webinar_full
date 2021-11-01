import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, Button } from "react-native";

import HeaderComp from "../components/HeaderComp";

const Second = (props) => {
  const [inputColor, setInputColor] = useState("black");
  const [color, setColor] = useState("black");
  const [isDisable, setIsDisable] = useState(true);
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <HeaderComp back={true} title="APP - screen 2" />
      <View
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          margin: 50,
          backgroundColor: color,
        }}
      />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setInputColor(text)}
            placeholder="Color"
          />
          <Button
            onPress={() => setIsDisable(!isDisable)}
            title={"Enable/Disable"}
          />
          <Button
            onPress={() => setColor(inputColor)}
            title={"mudar cor"}
            disabled={isDisable}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View style={styles.button}>
            <Button
              title="Home"
              color="hotpink"
              onPress={() => props.navigation.navigate("Home")}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Navegar 3º Ecrã"
              color={"blue"}
              onPress={() => props.navigation.navigate("Third")}
            ></Button>
          </View>
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
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    flex: 1,
  },
  input: {
    color: "black",
    fontSize: 30,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Second;
