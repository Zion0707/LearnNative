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
    _goCenterPage(){
        // Alert.alert('去中心页');
        this.props.navigation.navigate('Center');
    }
    _goDetailPage(){
        this.props.navigation.navigate('Detail');
    }
    render(){
        return (
            <View>
                <Text>Home</Text>
                {/* <Button 
                    onPress={this._goCenterPage.bind(this)}
                    title="go center page"
                /> */}
                <Button onPress={this._goDetailPage.bind(this)} title="跳转到详情页"/>
            </View>
        )
    }
}