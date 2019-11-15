import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler'

import Colors from "./constants/color";
import StartScreen from "./screen/start_screen";
import SignUp from "./screen/sign_up";
import text from "./constants/text";
import router from './navigation/router'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <Text style={styles.HeadingTitle}>App Name</Text>
      </View>
      <router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  Heading: {
    width: "100%",
    height: "10%",
    maxHeight: "10%",
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
