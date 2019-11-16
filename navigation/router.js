import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { StyleSheet } from "react-native";

import Colors from '../constants/color'
import text from '../constants/text'
import StartScreen from "../screen/start_screen";
import SignUp from "../screen/sign_up";

const styles = StyleSheet.create({
  Heading: {
    backgroundColor: Colors.primary,
  },

  HeadingTitle: {
    ...text.Heading,
    fontWeight: 'bold',
  },

});

const direction = createStackNavigator({
  Home: {
    screen: StartScreen,
  
  },
  SignUp: {
    screen: SignUp,
  },
},
{
  defaultNavigationOptions: ({navigation}) => ({
    title:"App Name",
    headerStyle: styles.Heading,
    headerTintColor: 'white'
  }),
  initialRouteName: "Home"
});

const Router = createAppContainer(direction)


export default Router;

