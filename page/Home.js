import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    Alert
} from 'react-native';

import Styles from '../assets/js/Styles';

export default class Home extends Component{
    constructor(props){
        super(props);
    }
    _goDetailPage(){
        this.props.navigation.navigate('Detail');
    }
    render(){
        return (
            <View>
                <Text>Home</Text>
                <Button onPress={this._goDetailPage.bind(this)} title="跳转到详情页"/>
            </View>
        )
    }
}