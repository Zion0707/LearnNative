import React, { Component } from 'react';
import {
    View, 
    Text,
    Button
} from 'react-native';

import Styles from '../assets/js/Styles';

export default class My extends Component{
    render(){
        return (
            <View>
                <Text>My</Text>
                <Button onPress={
                    ()=>{
                        this.props.navigation.popToTop()
                    }
                } title="pop to top"/>
            </View>
        )
    }
}