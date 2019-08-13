import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    FlatList,
    ScrollView,
    ActionSheetIOS,
    Alert,
    Platform,
    Clipboard,
    TextInput,
    ToastAndroid,
} from 'react-native';

import Styles from '../../assets/js/Styles';

export default class My extends Component{
    constructor(props){
        super(props);
    }
    async _copy(){
        Alert.alert('测试222');
    }
    componentDidMount(){
        console.log('加载');
    }
    render(){
        return (
            <ScrollView style={Styles.myView}>
                <TextInput />
                <Button title="按钮" onPress={this._copy.bind(this)}></Button>
            </ScrollView>
        );
    }
}