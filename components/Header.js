import React, { Component } from 'react';
import { 
    View,
    Text 
} from 'react-native';

import Styles from '../assets/js/Styles';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={Styles.headerStyle}>
                <Text style={Styles.headerTextStyle}>{this.props.title}</Text>
            </View>
        )
    }
}