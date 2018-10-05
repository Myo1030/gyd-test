import React from "react";
import {Alert, StyleSheet, Text, TouchableHighlight, View} from "react-native";

/**
 * Initialize props interface
 */
interface IContact {
	lastName: string;
	firstName: string;
	id: string;
	phones: [{
		label: string;
		number: string;
	}];
}

/**
 * UserRow template
 */
class ContactRow extends React.Component<IContact, any> {
	public render() {
		const contact = this.props;

		return (
			<TouchableHighlight style={styles.row} onPress={this.AlertContact.bind(this, contact)} underlayColor="lightgrey">
				<View>
					<Text style={styles.primaryText}>
						{contact.firstName + " " + contact.lastName}
					</Text>
					<Text style={styles.secondaryText}>id: {contact.id}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	/**
	 * Alert contact name + mobile number
	 * @param {IContact} contact
	 * @constructor
	 */
	private AlertContact = (contact: IContact) => {
		// Extract specificly the mobile number
		const phone = contact.phones.find((i) => i.label === "mobile");

		Alert.alert(
			contact.firstName + " " + contact.lastName,
			"mobile: " + (phone ? phone.number : "pas de mobile"),	// show message if no mobile number
		);
	};
}

/**
 * Stylesheet
 */
const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		padding: 12,
		backgroundColor: "#ffffff",
	},
	primaryText: {
		fontWeight: "bold",
		fontSize: 14,
		color: "black",
		marginBottom: 4,
	},
	secondaryText: {
		color: "grey",
	},
});

// tslint:disable no-default-export
export default ContactRow;
