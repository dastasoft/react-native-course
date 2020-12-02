import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => setCounter(prevCounter => prevCounter + 1);
  const onDecrease = () => setCounter(prevCounter => prevCounter - 1);

  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
      <Text>Current count:</Text>
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
