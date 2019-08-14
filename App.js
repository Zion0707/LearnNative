/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import AppContainer from './src/router/index';

import {View, Platform, Dimensions, StatusBar} from 'react-native';
var {height,width} =  Dimensions.get('window');

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{width:width, height:height}}>
        <AppContainer/>
      </View>
    );
  }
}
