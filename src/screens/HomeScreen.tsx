import React from "react";
import {View} from "react-native";
import {NavigationScreenOptions} from "react-navigation";

export class HomeScreen extends React.Component {
	public static navigationOptions: NavigationScreenOptions = {
		title: "Contacts",
	};

	public render() {
		return (
			<View />
		);
	}
}
