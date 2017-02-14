/**
 * Created by yugai on 17/2/13.
 */
'use strict'
import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';
const {width, height} = Dimensions.get('window')

export default class Item extends Component {
	render() {
		console.log(this.props.row)
		return (
			<TouchableOpacity style={styles.item} onPress={() =>this._onClick(this.props)}>
				<View style={{flex: 1, alignItems: 'center'}}>
					<Image style={{flex: 1, alignSelf: 'stretch', resizeMode: 'contain', resizeMethod: 'scale'}}
					       source={{uri: this.props.row.vertical_src}}>
					</Image>
				</View>
			</TouchableOpacity>
		);
	}

	_onClick(row) {

	}
}
const styles = StyleSheet.create({
	item: {
		height: (width / 2 - 20) * 9 / 16,
		flex: 1,
		margin: 5
	},
});