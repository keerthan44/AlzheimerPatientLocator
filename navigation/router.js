import { createStackNavigator } from "react-navigation-stack";

import StartScreen from "../screen/start_screen";
import SignUp from "../screen/sign_up";

const router = createStackNavigator({
  Home: {
    screen:StartScreen,

  },
  SignUp: {
    screen: SignUp,
  },
},
{
  initialRouteName: "Home"
});

export default router;
