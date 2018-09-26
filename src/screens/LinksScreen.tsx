import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {NavigationScreenOptions} from "react-navigation";

export class LinksScreen extends React.Component {
	public static navigationOptions: NavigationScreenOptions = {
		title: "Links",
	};

	public render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<Text style={styles.title}>Some links that could be useful</Text>
					{
						[
							"https://react-native-training.github.io/react-native-elements/docs/overview.html",
							"https://facebook.github.io/react-native/docs/scrollview",
							"https://docs.expo.io/versions/latest/",
						].map((l, index) => <Text key={index} style={styles.link}>{l}</Text>)
					}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	contentContainer: {
		paddingTop: 30,
	},
	title: {
		fontSize: 18,
		textAlign: "center",
	},
	link: {
		fontSize: 12,
		padding: 5,
	},
});
