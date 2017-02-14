/**
 * Created by yugai on 17/2/12.
 */
'use strict'
import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Live extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<IndicatorViewPager
					style={{height:200}}
					indicator={this._renderDotIndicator()}
				>
					<View style={{backgroundColor:'cadetblue'}}>
						<Text>page one</Text>
					</View>
					<View style={{backgroundColor:'cornflowerblue'}}>
						<Text>page two</Text>
					</View>
					<View style={{backgroundColor:'#1AA094'}}>
						<Text>page three</Text>
					</View>
				</IndicatorViewPager>

				<IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
					indicator={this._renderTitleIndicator()}
				>
					<View style={{backgroundColor:'cadetblue'}}>
						<Text>page one</Text>
					</View>
					<View style={{backgroundColor:'cornflowerblue'}}>
						<Text>page two</Text>
					</View>
					<View style={{backgroundColor:'#1AA094'}}>
						<Text>page three</Text>
					</View>
				</IndicatorViewPager>

				<IndicatorViewPager
					style={{flex:1, paddingTop:20, backgroundColor:'white'}}
					indicator={this._renderTabIndicator()}
				>
					<View style={{backgroundColor:'cadetblue'}}>
						<Text>page one</Text>
					</View>
					<View style={{backgroundColor:'cornflowerblue'}}>
						<Text>page two</Text>
					</View>
					<View style={{backgroundColor:'#1AA094'}}>
						<Text>page three</Text>
					</View>
				</IndicatorViewPager>
			</View>
		);
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
	}

	_renderDotIndicator() {
		return <PagerDotIndicator pageCount={3} />;
	}

	_renderTabIndicator() {
		let tabs = [{
			text: 'Home',
		},{
			text: 'Message',
		},{
			text: 'Profile',
		}];
		return <PagerTabIndicator tabs={tabs} />;
	}

}