import { hot } from "react-hot-loader";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

export default hot(module)(App);

const styles = StyleSheet.create({
  box: {
    padding: 20,
    borderStyle: "dashed",
    borderColor: "red",
    borderWidth: 1
  },
  text: {
    fontSize: 60,
    textAlign: "center"
  }
});
