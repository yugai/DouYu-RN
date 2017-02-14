/**
 * Created by yugai on 17/2/12.
 */
'use strict';

import React, { Component } from 'react'
import { Navigator, View ,StyleSheet, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import LocalImg from '../images'
import Home from '../ui/Home'
import Live from '../ui/Live'
import Column from '../ui/Column'
import User from '../ui/User'


export default class Wrapper extends Component{
	constructor(props){
		super(props)
		this.state = {
			title:'首页',
			selectedTab:'home'
		};
	}
	render(){
		return(
			<View style={{flex: 1, justifyContent: 'flex-end'}}>
				<TabNavigator>
					<TabNavigator.Item
						title="首页"
						selected={this.state.selectedTab === 'home'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={() => <Image source={LocalImg.tab_home_normal} style={styles.iconStyle}/>}
						renderSelectedIcon={() => <Image source={LocalImg.tab_home_selected} style={styles.iconStyle}/>}
						onPress={() => this.setState({ selectedTab: 'home', title:'首页'})}>
						<Home/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="直播"
						selected={this.state.selectedTab === 'live'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={() => <Image source={LocalImg.tab_live_normal} style={styles.iconStyle}/>}
						renderSelectedIcon={() => <Image source={LocalImg.tab_live_selected} style={styles.iconStyle}/>}
						onPress={() => this.setState({ selectedTab: 'live', title:'直播'})}>
						<Live/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="关注"
						selected={this.state.selectedTab === 'column'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={() => <Image source={LocalImg.tab_column_normal} style={styles.iconStyle}/>}
						renderSelectedIcon={() => <Image source={LocalImg.tab_column_selected} style={styles.iconStyle}/>}
						onPress={() => this.setState({ selectedTab: 'column', title:'关注'})}>
						<Column/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="我的"
						selected={this.state.selectedTab === 'user'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={() => <Image source={LocalImg.tab_user_normal} style={styles.iconStyle}/>}
						renderSelectedIcon={() => <Image source={LocalImg.tab_user_selected} style={styles.iconStyle}/>}
						onPress={() => this.setState({ selectedTab: 'user', title:'我的'})}>
						<User/>
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		)
	}
}
const styles=StyleSheet.create({
	container:{
		flex: 1
	},
	iconStyle:{
		width:26,
		height:26,
	},
	textStyle:{
		color:'#999',
	},
	selectedTextStyle:{
		color:'black',
	}
});