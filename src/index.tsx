import {AppLoading, Font} from "expo";
import React from "react";
import {Platform, StatusBar, StyleSheet, View} from "react-native";

import {AppNavigator} from "./navigation/AppNavigator";

interface Props {
	skipLoadingScreen: boolean;
}

interface State {
	isLoadingComplete: boolean;
}

// tslint:disable no-default-export
export default class App extends React.Component<Props, State>  {

	constructor(props: Props) {
		super(props);
		this.state = {
			isLoadingComplete: false,
		};
	}

	public render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this.loadResourcesAsync}
					onError={this.handleLoadingError}
					onFinish={this.handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					{Platform.OS === "ios" && <StatusBar barStyle="default" />}
					<AppNavigator />
				</View>
			);
		}
	}

	private loadResourcesAsync = () => {
		return Promise.resolve(
			Font.loadAsync({
				"space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
			}),
		);
	};

	private handleLoadingError = (error: Error) => {
		console.warn(error);
	};

	private handleFinishLoading = () => {
		this.setState({isLoadingComplete: true});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
