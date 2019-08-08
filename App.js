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
  Alert,
  Image
} from 'react-native';


import Header from './components/Header';
import Footer from './components/Footer';
import Styles from './assets/js/Styles';


type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			status: true,
			tabList:[
				{name:'减小'},
				{name:'加大'}
			],
			qiqiuSize:100
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
	_changeTab(idx, item){
		var calc = 0;
		if(item.name=='减小'){
			calc = -20;
		}else{
			calc = +20;
		}
		this.setState({
			qiqiuSize: this.state.qiqiuSize + calc
		});
	}
	render() {
		var headerProps={
			title:'首页'
		}
		return (
			<View style={Styles.container}>
				<Header {...headerProps}/>
				<View>
					<Image style={{width:this.state.qiqiuSize, height:this.state.qiqiuSize}} source={require('./assets/images/qiqiu.jpg')}/>
				</View>
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
