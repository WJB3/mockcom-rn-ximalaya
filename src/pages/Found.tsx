import React from 'react';
import { RootStackNavigation } from '@/navigator/index'
import { View,Text,Button } from 'react-native';
interface IProps{
    navigation:RootStackNavigation
}

const Found = (props:IProps)=>{
 
    return (
        <View>
            <Text>Listen</Text>
             
        </View>
    )
}

export default Found;