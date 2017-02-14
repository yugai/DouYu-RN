/**
 * Created by yugai on 17/2/12.
 */
'use strict';

import React, { Component } from 'react'
import Navigation from './app'
import { View, Platform } from 'react-native'

export default class rootApp extends Component {
	render() {
		return (
			<View style={{backgroundColor: "#eeeeeeee", flex: 1}}>
				<Navigation/>
			</View>
		)
	}
}