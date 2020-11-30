import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "dastasoft";

  return (
    <View>
      <Text style={styles.h1}>Gettingh started with React Native!</Text>
      <Text style={styles.h2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 45,
  },
  h2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
