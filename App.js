/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text, 
  View,
  Alert
} from 'react-native';


import Header from './components/Header';
import Footer from './components/Footer';
import Styles from './assets/js/Styles';


type Props = {};
export default class App extends Component<Props> {
	// state={
	// 	status: true,
	// 	tabList:[
	// 		{name:'nav1'},
	// 		{name:'nav2'}
	// 	]
	// }
	constructor(props){
		super(props);
		this.state={
			status: true,
			tabList:[
				{name:'nav1'},
				{name:'nav2'}
			]
		}
	}
	//dom加载完成时
	componentDidMount(){
		
	}
	//state被更新时
	shouldComponentUpdate(a,b){
		console.log(a, b);
		return true;
	}
	_changeTab(a, b){
		console.log(a, b);
	}
	render() {
		var headerProps={
			title:'首页'
		}
		return (
			<View style={Styles.container}>
				<Header {...headerProps}/>
					<View>
					{
						this.state.tabList.map((item,index)=>{
							return <Text onPress={this._changeTab.bind(this, index, item)} style={{margin:10}} key={item.name}>{item.name}</Text>
						})
					}
					</View>
				<Footer />
			</View>
		);
	}
}
