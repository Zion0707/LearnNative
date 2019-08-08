/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigator  from './navigation/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render() {
		return <AppNavigator/>;
	}
}
