import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    Alert
} from 'react-native';

export default class Home extends Component{
    constructor(props){
        super(props);
    }
    _goCenterPage(){
        // Alert.alert('去中心页');
        this.props.navigation.navigate('Center');
    }
    render(){
        return (
            <View>
                <Text>Home</Text>
                <Button 
                    onPress={this._goCenterPage.bind(this)}
                    title="go center page"
                />
            </View>
        )
    }
}