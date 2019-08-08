import React, { Component } from 'react';
import {
    View, 
    Text,
    Button
} from 'react-native';

export default class Center extends Component{
    render(){
        return (
            <View>
                <Text>Center</Text>

                <Button
                    title="Go to Center... again!"
                    onPress={
                        () => this.props.navigation.goBack()
                    }
                />
            </View>
        )
    }
}