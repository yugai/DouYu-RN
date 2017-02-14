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
					<Image style={{
						flex: 1,
						alignSelf: 'stretch',
						resizeMode: 'contain',
						resizeMethod: 'scale',
						borderRadius: 100
					}}
					       source={{uri: this.props.row.pic_url}}/>
					<Text>{this.props.row.tag_name}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	_onClick(row) {

	}
}
const styles = StyleSheet.create({
	item: {
		height: (width - 40) / 4,
		flex: 1,
		margin: 5
	},
});