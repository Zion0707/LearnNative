import React, { Component } from 'react';
import {
    ScrollView,
    View, 
    Text,
    TextInput,
} from 'react-native';

import Styles from '../../assets/js/Styles';

import Header from '../../components/Header';

export default class Center extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            language:'java'
        }
    }
    _getTextMsg=text=>{
        console.log(text);
        this.setState({ text });
    }
    _returnTextMsg=text=>{
        return `输入框内容为：${text}`;
    }
    render(){
        const {text} = this.state;
        return (
            <View>

                <Header/>

                <ScrollView style={Styles.scrollBox}>
                    <Text>{this._returnTextMsg(text)}</Text>
                </ScrollView>
                
                <View>
                    <TextInput 
                        style={Styles.margin40} 
                        placeholder="请输入..." 
                        onChangeText={this._getTextMsg.bind(this)}
                    />
                </View>


                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                    <View style={[Styles.flexItem, {backgroundColor:'red'}]}>
                        <Text>红色</Text>
                    </View>
                    <View style={[Styles.flexItem, {backgroundColor:'blue'}]}>
                        <Text>蓝色</Text>
                    </View>
                    <View style={[Styles.flexItem, {backgroundColor:'yellow'}]}>
                        <Text>黄色</Text>
                    </View>
                </View>
            </View>
        );
    }
}