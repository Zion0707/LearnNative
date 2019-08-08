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

import Styles from './assets/js/Styles';
console.log(Styles);

var headerProps={
	title:'首页'
}
type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			status: true,
			text:'button'
		}
	}
	//dom加载完成时
	componentDidMount(){
		// setTimeout(()=>{
		// 	this.setState({
		// 		text:'World'
		// 	});
		// },1000);
	}
	//state被更新时
	shouldComponentUpdate(a,b){
		console.log(a, b);
		return true;
	}
	_remove(){
		this.setState({
			status: false
		});
	}
	render() {
		var status = this.state.status ? <Header {...headerProps}/> : null;
		return (
			<View style={Styles.container}>
				{status}
				<Text onPress={this._remove.bind(this)}>{this.state.text}</Text>
			</View>
		);
	}
}
