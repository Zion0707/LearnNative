import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    Alert
} from 'react-native';

import Store from '../../redux/store/index';

export default class MyDetail extends Component{
    //更改store里面hello属性值
    _setStoreHello=()=>{

        Store.dispatch({
            type:'changeHelloVal',
            value:'修改值y'
        });

        Alert.alert('更改了，点击返回按钮获取修改的过的值');
    }
    render(){
        return (
            <View>
                <Button 
                    onPress={this._setStoreHello.bind(this)} 
                    title="点击我把state里面的hello值进行修改"
                />
            </View>
        );
    }
}