import {Contacts, Permissions} from "expo";
import _ from "lodash";
import React from "react";
import {StyleSheet, View} from "react-native";
import {NavigationScreenOptions} from "react-navigation";
import ContactSectionList from "../components/ContactSectionList";

export class HomeScreen extends React.Component {
	/**
	 * Define component main title
	 * @type {{title: string}}
	 */
	public static navigationOptions: NavigationScreenOptions = {
		title: "Contacts",
	};

	/**
	 * Initialize State
	 * @type {{contacts: Array}}
	 */
	public state: any = {
		contacts: [],
	};

	public render() {
		return (
			<View style={styles.container}>
				<ContactSectionList data={this.state.contacts} />
			</View>
		);
	}

	/**
	 * Get contacts after component mounts
	 * @returns {Promise<void>}
	 */
	public async componentDidMount() {
		await this.getContacts();
	}

	/**
	 * Extract all contacts of device
	 * @returns {Promise<any>}
	 */
	private async extractContacts(): Promise<any> {
		// Ask permission for contacts access
		const permission = await Permissions.askAsync(Permissions.CONTACTS);

		// If denied
		if (permission.status !== "granted") {
			return null;
		}

		// Extract contacts
		const contacts = await Contacts.getContactsAsync({
			fields: [
				Contacts.PHONE_NUMBERS,	// add phone numbers to extraction
			],
			pageSize: 10,
			pageOffset: 0,
		});

		if (contacts.total > 0) {
			return contacts.data;
		}
	}

	/**
	 * Get & format contact
	 * @returns {Promise<void>}
	 */
	private async getContacts() {
		// Async - Extract contacts
		const contacts = await this.extractContacts();

		// Format list for SectionList usage
		const formatedContacts = this.fromArrayToSectionData(contacts);

		this.setState({contacts: formatedContacts});
	}

	/**
	 * Format data for SectionList usage
	 * @param data
	 * @returns {any}
	 */
	private fromArrayToSectionData(data: any) {
		// Group contacts by first letter of firstname
		const ds = _.groupBy(data, (d) => d.firstName.charAt(0));

		// Restruct data for SectionList usage (separate key and data array)
		const test = _.reduce(ds, (acc, next, index) => {
				acc.push({
					key: index,
					data: next,
				});
				return acc;
			},
			[],
		);

		// Sort and return
		return _.orderBy(test, ["key"]);
	}
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
