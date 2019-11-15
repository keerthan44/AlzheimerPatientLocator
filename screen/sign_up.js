import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Colors from "../constants/color";
import text from "../constants/text";

const SignUp = props => {
  return (
    <View style={styles.Main}>
      <View style={{ alignItems: "center", height: "10%" }}>
        <Text style={{...text.Heading, text}}>Sign Up Page</Text>
      </View>
      <View style={{ height: "8%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{...text.normal, fontWeight: 'bold'}}>{"   "}Username:{"   "} </Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
      <View style={{ height: "8%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={text.normal}>{"   "}Username:{"   "} </Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
      <View style={{ height: "8%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={text.normal}>{"   "}Username:{"   "} </Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    paddingTop: "10%",
    flex: 1,
    alignContent: "center"
  },

  input: {
    width: "65%",
    marginBottom: 10,
    borderColor: "black",
    borderBottomWidth: 1
  },

});

export default SignUp;