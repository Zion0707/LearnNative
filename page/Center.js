import React, { Component } from 'react';
import {
    View, 
    Text,
    Button
} from 'react-native';

import Styles from '../assets/js/Styles';

export default class Center extends Component{

    componentWillUnmount(){
        console.log('卸载');
    }
    render(){
        return (
            <View>
                <Text>Center</Text>

                <Button
                    title="go my"
                    onPress={
                        () => this.props.navigation.navigate('My')
                    }
                />
            </View>
        )
    }
}