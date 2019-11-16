import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/color";
import text from "../constants/text";

export default function StartScreen(props) {
  return (
    <View style={styles.Main}>
      <View style={styles.Image}>
        <Image source={require("../assets/icon.png")}></Image>
      </View>
      <View style={styles.childrenContainer}>
        <View style={styles.children}>
          <Text style={text.normal}>New Account?{"  "}</Text>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("SignUp");
              console.log("Sign Up");
            }}
          >
            <Text style={styles.textDefault}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.children, paddingBottom: '4%'}}>
          <Text style={text.normal}>Old Account?{"  "}</Text>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.textDefault}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    borderColor: "black"
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
  },
  childrenContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  Image: { flex: 2, alignItems: "center", justifyContent: "center" },
  textDefault: {
    ...text.normal,
    color:Colors.hyperlink, 
    textDecorationLine: "underline",
    fontWeight: 'bold'
  }
});
