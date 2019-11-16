import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler'

import Colors from "./constants/color";
import text from "./constants/text";
import Router from './navigation/router'

export default function App() {

  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  Heading: {
    backgroundColor: Colors.primary,
    justifyContent: "space-evenly",
    paddingLeft: "2%",
    paddingTop: "10%"
  },

  HeadingTitle: {
    ...text.Heading,
    fontWeight: 'bold',
    color: 'white'
  },

  logo: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    resizeMode: "center"
  },

});
