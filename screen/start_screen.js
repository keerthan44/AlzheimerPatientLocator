import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/color";
import text from "../constants/text";
import SignUp from "./sign_up";
import router from '../navigation/router';

const StartScreen = props => {
  
  return (
    <View style={styles.Main}>
      <View style={styles.Image}>
        <Image source={require("../assets/icon.png")}></Image>
      </View>
      <View style={styles.childrenContainer}>
        <View style={styles.children}>
          <Text style={text.normal}>New Account?{"  "}</Text>

          <Text
            style={styles.textDefault}
            onPress={() => {
              console.log('Sign Up')
            }}
          >
            Sign Up
          </Text>
        </View>
        <View style={styles.children}>
          <Text style={text.normal}>Old Account?{"  "}</Text>

          <Text
            style={styles.textDefault}
            onPress={() => {
              console.log("Log in");
            }}
          >
            Log in
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    width: "100%",
    height: "10%",
    maxHeight: "10%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },

  logo: {
    width: "100%",
    height: "100%",
    borderColor: "black",
    resizeMode: "center"
  },

  Main: {
    paddingTop: "10%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },

  children: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2%"
  },
  childrenContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  Image: { flex: 2, alignItems: "center", justifyContent: "center" },
  textDefault: {...text.normal, color: "blue", textDecorationLine: "underline"}
});

export default StartScreen;
