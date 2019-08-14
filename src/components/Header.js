import React, { Component } from 'react';

import {
    View, 
    Text
} from 'react-native';

import Styles from '../assets/js/Styles';

import PropTypes from 'prop-types';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    //设置参数类型
    static propTypes={
        title: PropTypes.string
    }
    static defaultProps={
        title: '请设置头部参数'
    }
    render(){
        return (
            <View>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>
                        {this.props.title}
                    </Text>
                </View>
            </View>
        );
    }
}