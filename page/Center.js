import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    StyleSheet,
    Alert
} from 'react-native';

import Styles from '../assets/js/Styles';
import Utils from '../assets/js/Utils';

export default class Center extends Component{
    constructor(props){
        super(props);
        this.state={
            jsonData:''
        }
    }

    componentWillUnmount(){
        console.log('卸载');
    }

    componentDidMount(){
        var _self = this;
        //数据请求
        fetch('https://facebook.github.io/react-native/movies.json',{
            method:'GET'
        })
        .then((res)=>res.json())
        .then((res)=>{
            _self.setState({
                jsonData: JSON.stringify(res)
            });
        })
        .catch((err)=>{
            console.error(err);
        })

    }

    render(){
        return (
            <View>
                <Text>Center</Text>
                <View>
                    <Text style={styles.h2}>数据</Text>
                    <Text>{this.state.jsonData}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h2:{
        fontSize: Utils.pTd(30),
        fontWeight: 'bold'
    }
});