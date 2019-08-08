/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

//导入路由
import AppNavigator from './navigation/AppNavigator';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return <AppNavigator/>;
	}
}
