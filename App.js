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
  View
} from 'react-native';


import Header from './components/Header';

import Styles from './assets/js/Styles';
console.log(Styles);

var headerProps={
	title:'首页'
}
type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={Styles.container}>
				<Header {...headerProps}/>
				<Text>Hello</Text>
			</View>
		);
	}
}
