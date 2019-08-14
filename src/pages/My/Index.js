import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    ScrollView,
    Alert
} from 'react-native';

import Styles from '../../assets/js/Styles';
import Header from '../../components/Header';

//获取redux里面的信息
import Store from '../../redux/store/index';

export default class My extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    //获取store里面hello属性值
    _getStoreHello=()=>{
        Alert.alert( Store.getState().hello );
    }
    
    render(){
        return (
            <ScrollView style={Styles.myView}>

                <Header/>
                
                <Button title="获取state里面hello的值" onPress={this._getStoreHello.bind(this)}/>

                <Button title="跳转至详情页修改hello的值" onPress={
                    ()=>{this.props.navigation.navigate('MyDetail')}
                }/>
            </ScrollView>
        );
    }
}