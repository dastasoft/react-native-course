import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREASE = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + COLOR_INCREASE)}
        onDecrease={() => setRed(red - COLOR_INCREASE)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREASE)}
        onDecrease={() => setGreen(green - COLOR_INCREASE)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREASE)}
        onDecrease={() => setBlue(blue - COLOR_INCREASE)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
