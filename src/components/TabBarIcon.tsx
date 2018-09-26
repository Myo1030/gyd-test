import * as React from "react";
import {Icon, IconProps} from "react-native-elements";

import {Colors} from "../constants/Colors";

interface Props extends IconProps {
	focused: boolean;
}

export class TabBarIcon extends React.PureComponent<Props> {
	public render() {
		return (
			<Icon
				{...this.props}
				size={26}
				containerStyle={{marginBottom: -3}}
				color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
	}
}
