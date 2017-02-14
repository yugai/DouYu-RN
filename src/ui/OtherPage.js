/**
 * Created by yugai on 17/2/13.
 */
import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	Dimensions,
	TouchableHighlight
} from 'react-native';
import {
	IndicatorViewPager,
	PagerDotIndicator
} from 'rn-viewpager';
import GridView from '../component/GridView'
import Item from '../component/Item'
import IconItem from '../component/IconItem'
import NetUitl from '../utils/NetUitl'
import LocalImg from '../images'

//http://capi.douyucdn.cn/api/v1/getColumnDetail?shortName=game
const {width, height} = Dimensions.get('window')

export default class OtherPage extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			item1: [],
			item2: [],
			data: [],
			data1: [],
		};
	}

	componentDidMount() {
		this._getClassify()
		this._getHot()
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<IndicatorViewPager
					style={styles.head}
					indicator={this._renderDotIndicator()}
				>
					<View><GridView
						items={this.state.item1}
						itemsPerRow={4}
						renderItem={this._renderIcon.bind(this)}
					/></View>
					<View><GridView
						items={this.state.item2}
						itemsPerRow={4}
						renderItem={this._renderIcon.bind(this)}
					/></View>
				</IndicatorViewPager>
				<View style={styles.item}>
					<View style={{width: width, height: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
							<Image style={{width: 18, height: 18, resizeMode: 'contain', marginRight: 5}}
							       source={LocalImg.hot}/>
							<Text style={{fontSize: 15, fontWeight: 'bold'}}>
								最热
							</Text>
						</View>
						<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
							<Text>
								更多
							</Text>
							<Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 5}}
							       source={LocalImg.info}/>
						</View>
					</View>
					<GridView
						items={this.state.data1}
						itemsPerRow={2}
						renderItem={this._renderItem.bind(this)}/>
				</View>
				<View style={styles.item}>
					<View style={{width: width, height: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
							<Image style={{width: 18, height: 18, resizeMode: 'contain', marginRight: 5}}
							       source={LocalImg.zhibo}/>
							<Text style={{fontSize: 15, fontWeight: 'bold'}}>
								王者荣耀
							</Text>
						</View>
						<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
							<Text>
								更多
							</Text>
							<Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 5}}
							       source={LocalImg.info}/>
						</View>
					</View>
					<GridView
						items={this.state.data1}
						itemsPerRow={2}
						renderItem={this._renderItem.bind(this)}/>
				</View>
				<View style={styles.item}>
					<View style={{width: width, height: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
							<Image style={{width: 18, height: 18, resizeMode: 'contain', marginRight: 5}}
							       source={LocalImg.zhibo}/>
							<Text style={{fontSize: 15, fontWeight: 'bold'}}>
								阴阳师
							</Text>
						</View>
						<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
							<Text>
								更多
							</Text>
							<Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 5}}
							       source={LocalImg.info}/>
						</View>
					</View>
					<GridView
						items={this.state.data1}
						itemsPerRow={2}
						renderItem={this._renderItem.bind(this)}/>
				</View>
			</ScrollView>
		);
	}

	_renderIcon(row) {
		return (
			<IconItem row={row}/>
		)
	}

	_renderItem(row) {
		return (
			<Item row={row}/>
		)
	}

	_renderDotIndicator() {
		return <PagerDotIndicator pageCount={2}/>;
	}

	_getClassify() {
		let self = this
		NetUitl.get("https://capi.douyucdn.cn/api/v1/getColumnDetail?shortName=game", '', function (set) {
			self.setState({
				item1: set.data.slice(0, 8),
				item2: set.data.slice(8, 16)
			});
			console.log('----------------------------')
			console.log(set.data)
		})
	}

	_getHot() {
		let self = this
		NetUitl.post("https://capi.douyucdn.cn/api/v1/getHotCate?limit=4&offset=0", '', '', (set) => {
			//下面的就是请求来的数据
			self.setState({data1: set.data[0].room_list});
			console.log(set.data)
		})
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	head: {
		height: 210,
		backgroundColor: '#fff'
	},
	item: {
		marginTop: 10,
		paddingTop: 5,
		backgroundColor: '#fff'

	}
});