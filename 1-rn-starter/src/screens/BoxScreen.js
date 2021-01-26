import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View
        style={{ ...styles.subViewStyle, ...styles.subViewStyleRed }}
      ></View>
      <View
        style={{ ...styles.subViewStyle, ...styles.subViewStyleGreen }}
      ></View>
      <View
        style={{ ...styles.subViewStyle, ...styles.subViewStylePurple }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row"
  },
  subViewStyle: {
    borderWidth: 3,
    height: 100,
    flex: 1
  },
  subViewStyleRed: {
    backgroundColor: "red"
  },
  subViewStyleGreen: {
    backgroundColor: "green",
    top: 100
  },
  subViewStylePurple: {
    backgroundColor: "purple"
  }
});

export default BoxScreen;
