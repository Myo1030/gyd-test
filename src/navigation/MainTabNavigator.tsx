import React from "react";
import {Platform} from "react-native";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";

import {TabBarIcon} from "../components/TabBarIcon";
import {HomeScreen} from "../screens/HomeScreen";
import {LinksScreen} from "../screens/LinksScreen";

interface TabBarIconProps {
	focused: boolean;
}

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: "Home",
	tabBarIcon: ({focused}: TabBarIconProps) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-information-circle${focused ? "" : "-outline"}`
					: "md-information-circle"
			}
			type="ionicon"
		/>
	),
};

const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: "Links",
	tabBarIcon: ({focused}: TabBarIconProps) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? `ios-link${focused ? "" : "-outline"}` : "md-link"}
			type="ionicon"
		/>
	),
};

export const MainTabNavigator = createBottomTabNavigator({
	LinksStack,
	HomeStack,
});
