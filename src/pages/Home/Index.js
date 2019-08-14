import React, { Component } from 'react';
import {
    View, 
    Text, 
    Button
} from 'react-native';

import Styles from '../../assets/js/Styles';

import Header from '../../components/Header';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        var _self = this;
        fetch('https://api.myjson.com/bins/pg5ij', {
            method: 'GET',
        }) 
        .then((response) => response.json())
        .then((data) => {
            _self.setState({
                list: data.list
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    //跳转到详情
    _goDetail(item){
        this.props.navigation.navigate('HomeDetail', item);
    }
    render(){
        const {list} = this.state;
        return (
            <View>

                <Header title="首页"/>
                
                <View style={Styles.listWrap}>
                {
                    list.map((item,index)=>{
                        return <Text style={Styles.listItem}
                                    key={index} 
                                    onPress={this._goDetail.bind(this, item)}>
                                    {item.name}
                                </Text>
                    })
                }
                </View>
                <Text style={[list.length?Styles.hide:'', Styles.loadText]}>
                    加载中...
                </Text>
            </View>
        );
    }
}