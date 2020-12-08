import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, setValue }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() =>
          setValue(prevValue => {
            console.log(prevValue);
            if (prevValue < 255) return prevValue + 1;
            return prevValue;
          })
        }
      />
      <Button
        title={`Less ${color}`}
        onPress={() =>
          setValue(prevValue => {
            if (prevValue > 1) return prevValue - 1;
            return prevValue;
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
