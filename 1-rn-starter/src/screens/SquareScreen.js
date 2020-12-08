import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter color="Red" setValue={setRed} />
      <ColorCounter color="Green" setValue={setGreen} />
      <ColorCounter color="Blue" setValue={setBlue} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
