import { createStackNavigator } from "react-navigation-stack";
import Profile from "../screens/Profile/ProfileScreen";
import EditScreenOne from "../screens/Profile/EditScreenOne";
import EditScreenTwo from "../screens/Profile/EditScreenTwo";

const stackNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
);
export default stackNav;