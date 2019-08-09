/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

//下面两行是屏蔽警告
console.disableYellowBox = true;
console.warn('黄色警告关闭！');

//导入路由
import AppNavigator from './router/index';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return <AppNavigator/>;
	}
}
