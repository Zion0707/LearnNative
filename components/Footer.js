import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Styles from '../assets/js/Styles';

export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    //设置默认props参数
    static defaultProps={
        text:'f'
    }
    render(){
        return (
            <View>
                <Text style={Styles.footerStyle}>{this.props.text}</Text>
            </View>
        )
    }
}