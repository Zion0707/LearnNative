/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import AppContainer from './src/router/index';

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer/>;
  }
}
