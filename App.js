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

import Styles from './assets/js/Styles';

import Home from './page/Home';
import Center from './page/Center';
import My from './page/My';





type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render() {
		return (
			<View style={Styles.container}>
				<Text>test</Text>
			</View>
		);
	}
}
