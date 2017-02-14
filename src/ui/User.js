/**
 * Created by yugai on 17/2/12.
 */
'use strict'
import React, {Component} from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	Dimensions,
	Platform,
	AlertIOS,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
} from 'react-native';
import LocalImg from '../images'
import UserItem from '../component/UserItem'
const {width, height} = Dimensions.get('window')

export default class User extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Image style={styles.head} source={LocalImg.user_top}>
					<View style={{alignSelf: 'flex-end', flexDirection: 'row', marginTop: 16}}>
						<Image style={{width: 25, height: 25,marginRight:10}} source={LocalImg.nar_history}/>
						<Image style={{width: 25, height: 25, marginRight:10}} source={LocalImg.setting}/>
					</View>
					<View style={{flexDirection:'row',marginLeft:10}}>
						<Image style={{width: 60, height: 60}} source={LocalImg.head}/>
					</View>
				</Image>

				<View style={styles.headView}>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.user_message}/>
						<Text>
							消息
						</Text>
					</View>
					<View style={{width:1,height:60,alignSelf:'center',backgroundColor:'#eee'}}/>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.user_noble}/>
						<Text>
							斗鱼贵族
						</Text>
					</View>
					<View style={{width:1,height:60,alignSelf:'center',backgroundColor:'#eee'}}/>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.user_recharge}/>
						<Text>
							鱼翅充值
						</Text>
					</View>
				</View>

				<UserItem text="鱼吧" top={10}/>
				<UserItem text="我要当主播" top={10}/>
				<UserItem text="排行榜"/>
				<UserItem text="我的视频" top={10}/>
				<UserItem text="视频收藏"/>
				<UserItem text="我的帐户" top={10}/>
				<UserItem text="免流量特权"/>
				<UserItem text="游戏中心"/>
				<UserItem text="开播提醒" top={10}/>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	head: {
		height: 140,
		width: width,
		resizeMode: 'stretch',
		backgroundColor: '#fff',
		flexDirection: 'column'
	},
	item: {
		marginTop: 10,
		paddingTop: 5,
		backgroundColor: '#fff'

	},
	headView: {
		height: 80,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headItem: {
		alignSelf: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		flex: 1
	},
	headImg: {
		width: 32,
		height: 32,
		marginBottom: 5
	},

});