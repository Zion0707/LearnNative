import React, { Component } from 'react';
import {View, Text} from 'react-native';
export default class HomeDetail extends Component{
    //设置顶部样式
    static navigationOptions = { 
        headerTitle: '首页详情',
        headerTintColor:'orangered',
    }
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