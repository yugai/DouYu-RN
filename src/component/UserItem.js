/**
 * Created by yugai on 17/2/14.
 */
import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import LocalImg from '../images'
const {width, height} = Dimensions.get('window')

export default class UserItem extends Component {

	render() {
		return (
			<TouchableOpacity style={{flex: 1, marginTop: this.props.top, backgroundColor: '#fff', height: 40}}
			                  onPress={() =>this._onClick(this.props)}>
				<View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row',}}>
					<View style={{marginLeft: 10, alignSelf: 'center',alignItems:'center', flexDirection: 'row'}}>
						<Image style={{width: 20, height: 20, marginRight: 10}} source={LocalImg.yuba}></Image>
						<Text>{this.props.text}</Text>
					</View>
					<Image style={{width: 24, height: 24, alignSelf: 'center'}} source={LocalImg.right_btn}></Image>
				</View>
			</TouchableOpacity>
		);
	}

	_onClick(row) {

	}
}