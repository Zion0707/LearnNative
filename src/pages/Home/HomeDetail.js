import React, { Component } from 'react';
import {View, Text} from 'react-native';
export default class HomeDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            navigationParams: this.props.navigation.state.params
        }
    }

    componentDidMount(){

    }
    render(){
        const { navigationParams } = this.state;
        return (
            <View>
                <Text>{ navigationParams.id }</Text>
                <Text>{ navigationParams.name }</Text>
            </View>
        );
    }
}