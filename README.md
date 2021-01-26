# React Native Course

Personal notes and progress on The Complete React Native Udemy Course.

## Course

<div align="center">

![The Complete React Native + Hooks Course [2020 Edition]](https://img-b.udemycdn.com/course/240x135/959700_8bd2_11.jpg?secure=4l0y9tgQta3xj8wQ0AJN5w%3D%3D%2C1606235617)<br />
[The Complete React Native + Hooks Course [2020 Edition]](https://www.udemy.com/course/the-complete-react-native-and-redux-course/) by [Stephen Grider](https://www.udemy.com/user/sgslo).<br />
Status: **Ongoing**

 </div>
 
 
## Table of contents

## The CLI

We can use these two CLI to create new React Native projects:

### expo-cli

Adds in a ton of defaul config to use features common in apps, like icons, video, better camera usage, etc.

For creating a new project use the following command:

```sh
npx expo-cli init project-name
```

### react-native-cli

Default CLI to generate a project. Requires a lot of extra work to add common features but gives you more control.

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
    fontSize: 30
  }
});

export default ComponentsScreen;
```

We still use JSX to give form to the UI (like in React web) and CSS-in-JS solution for the styles. The components that we use from `react-native` like `Text` are **primitive** components premade by react-native that displays following the correct look and feel of Android, ios, and web.

### Making Lists

If you are coming from React for the web (react-dom), you might be used to 'mapping' an array of data to build a list. In RN is better\* to use the **primitive** `FlatList`.

\*FlatList has lazy loading and other tweaks to have a greater performance and customization than the map solution. FlatList optimizations will shine when the array of the data is large.

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
    { name: "Friend #9" }
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
  { name: "Friend #9", key: "9" }
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

### Buttons

There are two types of buttons in RN:

- `Button` -> Very simple component for showing a button and detecting a press.

```js
import { Button } from "react-native";

const HomeScreen = () => {
  return (
    <Button
      onPress={() => console.log("Button pressed")}
      title="Go to Components Demo"
    />
  );
};
```

- `TouchableOpacity` -> Highly customizable component that can detect a press on just about any kind of element.

```js
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <TouchableOpacity onPress={() => console.log("List Pressed")}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  );
};
```

The component `TouchableOpacity` allows to pass any kind of component (even a group of components) and treat them as a button without a predefinied style.

The **primitive** `Button` was introduced later by the RN team to provide a simple and intuitive button to the devs.

### Inputs

The inputs works in a very similar way than in React web.

```js
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
    </View>
  );
};
```

- You must define a style, because `TextInput` are totally unstyled by default.
- The props `autoCapitalize` and `autoCorrect` will be useful when dealing with Android and iOS plataforms at the same time, they have different behaviours, with this props to none and false you will get the same experience in any platform.
- Like in React for web, creating a state, using the value and rerendering the new value through changing the state is the way to handle inputs.

### React State

If you already know React State from the web, you can skip this part, it's the same.

Remember to follow the next rules:

- We never directly modify a state variable. React only detect changes in the state through the setter.
- We can name the state variable anything we wish.
- We can track any kind of data that changes over time.
- When a component is rerendered, **all of its children get rerendered too**.
- A state variable can be passed to a child component (as so the setter).
- Every instance of the component will have his own instance of the state.
- Generally, we create state variables in the most parent component that needs to read or change a state value.

What we put inside of the state? Check the three questions below:

- What piece of data is changing in our app?
- What type of data is it?
- What is the data's starting (default) value?

For example:

- What piece of data is changing in our app? -> A collection of images.
- What type of data is it? -> An array.
- What is the data's starting (default) value? -> Empty

With thar answers we can generate the state of our component:

```js
import React, { useState } from "react";

const MyComponent = () => {
  const [images, setImages] = useState([]);
};
```

#### Reducers

A reducer is a function that will manage changes to the state object. Think of using a reducer when multiple states are close related and you know exactly when and how it changes.

Is always called with two arguments

- The first argument is the object that has all of our state in it
- The second argument is a object that describes the update we want to make

We look at the second argument and use it to decide how to change the first argument, but we will never change the first argument directly.

We must always return a value to be used as first argument.

##### Community Conventions

There are some rules that are optional but recommended to follow.

The parameters we pass to the dispatcher function we will name it, type and payload:

- type: String that describes the exact change operation we want to make
- payload: Some data that is critical to the change operation

For example:

```js
dispatch({ type: "change_red", payload: 15 });
```

### Using the React Navigation

### Images

### Layouts

Let's talk about how to handle elements in the screen. We'll follow three diferent strategies that are very similar than in the web version.

#### Box Object Model

The height/width of an element + the space around it (margins and paddings) -> Use this to affect the positioning of a single element.

|-----margin-----|
||----border----||
|||---padding---||
||||--cntent--||||

Some example properties:

- margin: Set the margin on all sides
- marginVertical: Set the margin on top and bottom
- marginHorziontal: Set the margin on left and right
- padding: Set the padding on all sides
- paddingVertical: Set the padding on top and bottom
- paddingHorizontal: Set the padding on left and right
- borderWidth: Set border width on all sides

#### Flexbox

How some number of sibling elements get laid out inside a parent, use this to position multiple elements with a common parent.

Parent properties:

- alignItems
- justifyContent
- flexDirection

Child properties:

- flex
- alignSelf

#### Position

How a single element gets laid out inside of a parent, use this to override Box Object Model or Flex Box.

Some properties:

- position: relative by default, absolute.
- top
- bottom
- left
- right

Some trick to expand an item

```js
myCustomStyle: {
  position: absolute,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
},
myCustomStyleShorthand: {
  ...StyleSheet.absoluteFillObject
}
```

Both properties achieves the same result.
