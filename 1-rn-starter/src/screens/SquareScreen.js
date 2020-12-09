import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREASE = 15;

const isValidAmount = (colorAmount, increaseAmount) =>
  colorAmount + increaseAmount <= 255 && colorAmount + increaseAmount >= 0;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return isValidAmount(state.red, action.amount)
        ? {
            ...state,
            red: state.red + action.amount
          }
        : state;
    case "green":
      return isValidAmount(state.green, action.amount)
        ? {
            ...state,
            green: state.green + action.amount
          }
        : state;
    case "blue":
      return isValidAmount(state.blue, action.amount)
        ? {
            ...state,
            blue: state.blue + action.amount
          }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREASE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREASE })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREASE })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "green",
            amount: -1 * COLOR_INCREASE
          })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREASE })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "blue",
            amount: -1 * COLOR_INCREASE
          })
        }
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
