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
	Dimensions,
	TouchableHighlight
} from 'react-native';
import {
	IndicatorViewPager,
	PagerDotIndicator
} from 'rn-viewpager';
import GridView from '../component/GridView';
import Item from '../component/Item'
import YZItem from '../component/YZItem'
import NetUitl from '../utils/NetUitl'
import LocalImg from '../images'
const {width, height} = Dimensions.get('window')

export default class Recommend extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			data1: [{
				"specific_catalog": "",
				"vertical_src": "https://rpic.douyucdn.cn/a1702/13/15/599358_170213153601.jpg",
				"ranktype": "0",
				"nickname": "良小伞san",
				"subject": "",
				"room_src": "https://rpic.douyucdn.cn/a1702/13/15/599358_170213153601.jpg",
				"cate_id": "1",
				"specific_status": "0",
				"game_name": "英雄联盟",
				"avatar_small": "https://apic.douyucdn.cn/upload/avatar/face/201608/16/0cc8ad314c3aee4350d3e426c8ecf872_small.jpg",
				"online": "22325",
				"avatar_mid": "https://apic.douyucdn.cn/upload/avatar/face/201608/16/0cc8ad314c3aee4350d3e426c8ecf872_middle.jpg",
				"vod_quality": "0",
				"room_name": "小伞 今天咱去韩服用黑暗上分神器射雕",
				"child_id": "35",
				"room_id": "599358",
				"show_time": "1486958747",
				"isVertical": 0,
				"show_status": "1",
				"jumpUrl": ""
			},
				{
					"specific_catalog": "",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/15/1137727_170213153613.jpg",
					"ranktype": "0",
					"nickname": "才华横溢你疯总",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/15/1137727_170213153613.jpg",
					"cate_id": "1",
					"specific_status": "0",
					"game_name": "英雄联盟",
					"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201701/05/01/8304d7193a1d500443be412eac37467c_small.jpg",
					"online": "3468",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201701/05/01/8304d7193a1d500443be412eac37467c_middle.jpg",
					"vod_quality": "0",
					"room_name": "她曾经是个王者",
					"child_id": "35",
					"room_id": "1137727",
					"show_time": "1486950009",
					"isVertical": 0,
					"show_status": "1",
					"jumpUrl": ""
				},
				{
					"specific_catalog": "",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/15/974432_170213152647.jpg",
					"ranktype": "0",
					"nickname": "Fay椰蓉丶",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/15/974432_170213152647.jpg",
					"cate_id": "1",
					"specific_status": "0",
					"game_name": "英雄联盟",
					"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201702/09/11/c3ff12d05184ec61f6dd9fb44162d19c_small.jpg",
					"online": "2773",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201702/09/11/c3ff12d05184ec61f6dd9fb44162d19c_middle.jpg",
					"vod_quality": "0",
					"room_name": "一个想上分的小姐姐",
					"child_id": "168",
					"room_id": "974432",
					"show_time": "1486968199",
					"isVertical": 0,
					"show_status": "1",
					"jumpUrl": ""
				},
				{
					"specific_catalog": "luoriguanch",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/15/124387_170213154346.jpg",
					"ranktype": "0",
					"nickname": "落日观潮",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/15/124387_170213154346.jpg",
					"cate_id": "1",
					"specific_status": "1",
					"game_name": "英雄联盟",
					"avatar_small": "https://apic.douyucdn.cn/upload/avatar/face/201608/05/78451f1b515405a5a79ee6334032ee19_small.jpg",
					"online": "2290",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avatar/face/201608/05/78451f1b515405a5a79ee6334032ee19_middle.jpg",
					"vod_quality": "0",
					"room_name": "螳螂and。。一个有梦想的打野",
					"child_id": "33",
					"room_id": "124387",
					"show_time": "1486952941",
					"isVertical": 0,
					"show_status": "1",
					"jumpUrl": ""
				}],
			data2: [ {
				"specific_catalog": "feidieshuo",
				"vertical_src": "https://rpic.douyucdn.cn/a1702/13/17/1449125_170213173858.jpg",
				"ranktype": "10",
				"nickname": "飞碟说官方",
				"subject": "",
				"room_src": "https://rpic.douyucdn.cn/a1702/13/17/1449125_170213173858.jpg",
				"rpos": "10",
				"cate_id": "246",
				"specific_status": "1",
				"game_name": "鱼艺",
				"push_ios": "1",
				"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201612/02/14/f018b89e3a8b7571767897778026672f_small.jpg",
				"online": "34155",
				"recomType": "0",
				"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201612/02/14/f018b89e3a8b7571767897778026672f_middle.jpg",
				"vod_quality": "0",
				"child_id": "417",
				"room_name": "飞碟说--知识从未如此性感",
				"room_id": "1449125",
				"isVertical": 0,
				"show_time": "1486951109",
				"show_status": "1",
				"jumpUrl": ""
			},
				{
					"specific_catalog": "yilidi",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/17/9401_170213173436.jpg",
					"ranktype": "10",
					"nickname": "中华卖菜帝",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/17/9401_170213173436.jpg",
					"rpos": "10",
					"cate_id": "2",
					"specific_status": "1",
					"game_name": "炉石传说",
					"push_ios": "1",
					"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201612/15/12/e04e822780694e72681f0fb481e87a84_small.jpg",
					"online": "57103",
					"recomType": "0",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201612/15/12/e04e822780694e72681f0fb481e87a84_middle.jpg",
					"vod_quality": "0",
					"child_id": "155",
					"room_name": "大帝：场均12.5胜瓜皮竞技场",
					"room_id": "9401",
					"isVertical": 0,
					"show_time": "1486962071",
					"show_status": "1",
					"jumpUrl": ""
				},
				{
					"specific_catalog": "weinijun",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/17/147398_170213173038.jpg",
					"ranktype": "10",
					"nickname": "维尼君y",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/17/147398_170213173038.jpg",
					"rpos": "10",
					"cate_id": "245",
					"specific_status": "0",
					"game_name": "梦幻诛仙",
					"push_ios": "1",
					"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201612/05/00/cf0bc5159bb2c202dcadc575f6a1272c_small.jpg",
					"online": "12536",
					"recomType": "0",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201612/05/00/cf0bc5159bb2c202dcadc575f6a1272c_middle.jpg",
					"vod_quality": "0",
					"child_id": "0",
					"room_name": "梦幻诛仙真好玩，我还要充钱",
					"room_id": "147398",
					"isVertical": 0,
					"show_time": "1486964324",
					"show_status": "1",
					"jumpUrl": ""
				},
				{
					"specific_catalog": "",
					"vertical_src": "https://rpic.douyucdn.cn/a1702/13/17/980097_170213172903.jpg",
					"ranktype": "10",
					"nickname": "宴门丨陛下",
					"subject": "",
					"room_src": "https://rpic.douyucdn.cn/a1702/13/17/980097_170213172903.jpg",
					"rpos": "10",
					"cate_id": "30",
					"specific_status": "0",
					"game_name": "综合手游",
					"push_ios": "1",
					"avatar_small": "https://apic.douyucdn.cn/upload/avanew/face/201612/14/17/bc635d756e47d101160fca0ad10fd4de_small.jpg",
					"online": "9393",
					"recomType": "0",
					"avatar_mid": "https://apic.douyucdn.cn/upload/avanew/face/201612/14/17/bc635d756e47d101160fca0ad10fd4de_middle.jpg",
					"vod_quality": "0",
					"child_id": "16",
					"room_name": "这个游戏叫《无尽争霸》。。。。",
					"room_id": "980097",
					"isVertical": 0,
					"show_time": "1486976379",
					"show_status": "1",
					"jumpUrl": ""
				}],
		};

	}

	componentDidMount() {
		// this._renderBanner()
		this._getHot()
		this._getYanZhi()
	}

	render() {
		return (
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<IndicatorViewPager
					style={styles.banner}
					indicator={this._renderDotIndicator()}
				>
					<View><Image style={styles.bannerImg} source={LocalImg.banner1}/></View>
					<View><Image style={styles.bannerImg} source={LocalImg.banner2}/></View>
					<View><Image style={styles.bannerImg} source={LocalImg.banner3}/></View>
					<View><Image style={styles.bannerImg} source={LocalImg.banner4}/></View>
				</IndicatorViewPager>
				<View style={styles.head}>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.rank}/>
						<Text>
							排行榜
						</Text>
					</View>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.message}/>
						<Text>
							消息
						</Text>
					</View>
					<View style={styles.headItem}>
						<Image style={styles.headImg} source={LocalImg.all_live}/>
						<Text>
							全部直播
						</Text>
					</View>
				</View>
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
								颜值
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
						items={this.state.data2}
						itemsPerRow={2}
						renderItem={this._renderYZItem.bind(this)}/>
				</View>
				<View style={styles.item}>
					<View style={{width: width, height: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
						<View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
							<Image style={{width: 18, height: 18, resizeMode: 'contain', marginRight: 5}}
							       source={LocalImg.zhibo}/>
							<Text style={{fontSize: 15, fontWeight: 'bold'}}>
								英雄联盟
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


	_renderDotIndicator() {
		return <PagerDotIndicator pageCount={4}/>;
	}

	_renderBanner() {
		let self = this
		NetUitl.post("http://www.douyutv.com/api/v1/slide/6", '', '', function (set) {
			//下面的就是请求来的数据
			self.state.banner = set.data
			console.log(self.state.banner)
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

	_getYanZhi() {
		let self = this
		NetUitl.post("https://capi.douyucdn.cn/api/v1/getbigDataRoom", '', '', (set) => {
			//下面的就是请求来的数据
			self.setState({data2: [set.data[0],set.data[1],set.data[2],set.data[3]]});
			console.log(set.data)
		})
	}

	_renderItem(row) {
		return (
			<Item row={row}/>
		)
	}

	_renderYZItem(row) {
		return (
			<YZItem row={row}/>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	banner: {
		height: 140,
	},
	bannerImg: {
		resizeMode: 'stretch',
		height: 140,
		width: width
	},
	head: {
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
		width: 36,
		height: 36,
		marginBottom: 5
	},
	typesItem: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		marginTop: 10,
		paddingTop: 5,
		backgroundColor: '#fff'

	},
});