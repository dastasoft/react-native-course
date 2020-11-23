# React Native Course

Personal notes and progress on The Complete React Native Udemy Course.

## Course

<div align="center">

![The Complete React Native + Hooks Course [2020 Edition]](https://img-b.udemycdn.com/course/240x135/959700_8bd2_11.jpg?secure=4l0y9tgQta3xj8wQ0AJN5w%3D%3D%2C1606235617)<br />
[The Complete React Native + Hooks Course [2020 Edition]](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) by [Stephen Grider](https://www.udemy.com/user/sgslo).<br />
Status: **Ongoing**

 </div>
 
 
## Table of contents

## Concepts

The `React` library is all about how different components work together. On the other hand the `React Native` library knows how to take some information from those components and use it to actually show content on the mobile device.

### Basic Component

```js
import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
```

We still use JSX to give form to the UI (like in React web) and CSS-in-JS solution for the styles. The components that we use from `react-native` like `Text` are **primitive** components premade by react-native that displays following the correct look and feel of Android, ios, and web.
