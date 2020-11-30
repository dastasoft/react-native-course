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

### Making Lists

If you are coming from React for the web (react-dom), you might be used to 'mapping' an array of data to build a list. In RN is better\* to use the **primitive** `FlatList`.

```js
const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];

  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};
```

- Turns an array into a list of elements
- We are required to pass in a **prop** of `data` - the array of data what we are gogint o create a bunch of elements out of.
- Also required to pass in a `renderItem` prop - function that will turn each individual item into an element.

#### The Key property

In order to link the object of the array with the object in the screen, RN needs a `key`, the key must be **unique** and a **string**.

There are two possible solutions:

- Add the key in the array itself

```js
const friends = [
  { name: "Friend #1", key: "1" },
  { name: "Friend #2", key: "2" },
  { name: "Friend #3", key: "3" },
  { name: "Friend #4", key: "4" },
  { name: "Friend #5", key: "5" },
  { name: "Friend #6", key: "6" },
  { name: "Friend #7", key: "7" },
  { name: "Friend #8", key: "8" },
  { name: "Friend #9", key: "9" },
];
```

- Using the prop `keyExtractor`

```js
<FlatList
  keyExtractor={friend => friend.name}
  data={friends}
  renderItem={({ item }) => {
    return <Text>{item.name}</Text>;
  }}
/>
```

We'll use this second approach because we don't need to modify the data with values of the view.
