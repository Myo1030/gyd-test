import React from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";
import ContactRow from "./ContactRow";

/**
 * SectionList - renderItem template
 * @private
 * @param contact
 */
const renderItem = ( {item}: any) => (
	<ContactRow
		lastName={item.lastName}
		firstName={item.firstName}
		id={item.id}
		phones={item.phoneNumbers}
	/>
);

/**
 * SectionList - renderSectionHeader template
 * @private
 * @param section
 */
const renderSectionHeader = ( {section}: any ) => (
	<View style={styles.sectionHeaderView}>
		<Text style={styles.sectionHeaderText}>{(section.key ? section.key.toUpperCase() : "no")}</Text>
	</View>
);

/**
 * SectionList - ItemSeparatorComponent template
 * @private
 */
const renderSeparator = () => (
	<View style={styles.separatorView} />
);

/**
 * SectionList - ListEmptyComponent template
 * @private
 */
const renderEmpty = () => (
	<View style={styles.emptyView}>
		<Text>Aucun résultat</Text>
	</View>
);

/**
 * Custom SectionList
 */
class ContactSectionList extends React.Component<any, any> {

	public render() {
		const props = this.props;

		return (
			<SectionList
				sections={props.data}
				renderSectionHeader={renderSectionHeader}
				renderItem={renderItem}
				keyExtractor={(item) => item.lastName}
				ItemSeparatorComponent={renderSeparator}
				ListEmptyComponent={renderEmpty}
			/>
		);
	}
}

/**
 * StyleSheet
 */
const styles = StyleSheet.create({
	sectionHeaderView: {
		padding: 8,
		backgroundColor: "#e3e3e3",
	},
	sectionHeaderText: {
		fontWeight: "bold",
	},
	separatorView: {
		height: 1,
		backgroundColor: "lightgrey",
	},
	emptyView: {
		height: 40,
		alignItems: "center",
		justifyContent: "center",
	},
});

// tslint:disable no-default-export
export default ContactSectionList;
