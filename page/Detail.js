import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import Styles from '../assets/js/Styles';
export default class Detail extends Component{
    _goCenterPage(){
        this.props.navigation.navigate('我的');
    }
    render(){
        return (
            <View>
                <Text>detail</Text>
                <Button onPress={this._goCenterPage.bind(this)} title="回到中心页"/>
            </View>
        )
    }
}