import {createSwitchNavigator} from "react-navigation";

import {MainTabNavigator} from "./MainTabNavigator";

export const AppNavigator = createSwitchNavigator({
	Main: MainTabNavigator,
});
