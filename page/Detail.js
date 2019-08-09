import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import Styles from '../assets/js/Styles';
export default class Detail extends Component{

    static navigationOptions=({ navigation })=>{
        const { params } = navigation.state;
        return {
            title: params ? params.title : '详情页',
        }
    }
    _goCenterPage(){
        // this.props.navigation.navigate('我的');
        this.props.navigation.navigate('中心');
    }
    _setPageTitle(){
        this.props.navigation.setParams({title: '1111'});
    }
    render(){
        return (
            <View>
                <Text>detail</Text>
                <Button onPress={this._setPageTitle.bind(this)} title="改变title"/>
                <Button onPress={this._goCenterPage.bind(this)} title="回到中心页"/>
            </View>
        )
    }
}