/**
 * Created by yugai on 17/2/12.
 */
'use strict'
import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	Dimensions
} from 'react-native';
import {
	IndicatorViewPager,
	PagerTitleIndicator
} from 'rn-viewpager';
import LocalImg from '../images'
import Recommend from './Recommend'
import OtherPage from './OtherPage'

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.head}>
					<Image style={styles.logo} source={LocalImg.logo}>
					</Image>
					<View style={{flexDirection: 'row'}}>
						<Image style={styles.nar} source={LocalImg.nar_history}>
						</Image>
						<Image style={styles.nar} source={LocalImg.nar_scan}>
						</Image>
						<Image style={styles.nar} source={LocalImg.nar_search}>
						</Image>
					</View>
				</View>
				<IndicatorViewPager
					style={{flex: 1, flexDirection: 'column-reverse'}}
					indicator={this._renderTitleIndicator()}>
					<View>
						<Recommend/>
					</View>
					<View>
						<OtherPage/>
					</View>
					<View>
						<OtherPage/>
					</View>
					<View>
						<OtherPage/>
					</View>
					<View>
						<OtherPage/>
					</View>
				</IndicatorViewPager>
			</View>
		);
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator titles={['推荐', '手游', '娱乐',"游戏","趣玩"]}/>;
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	head: {
		width: maxWidth,
		height: 56,
		backgroundColor: '#EE6911',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	logo: {
		width: 50,
		height: 28,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginTop: 8,
		marginLeft: 10
	},
	nar: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		alignSelf: 'center',
		marginTop: 8,
		marginRight: 10
	}
});