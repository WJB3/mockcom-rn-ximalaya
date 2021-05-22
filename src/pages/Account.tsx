import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { View,Text } from 'react-native';
import {RootStackParamList } from '@/navigator/index'

interface IProps{
    route:RouteProp<RootStackParamList,'Detail'>
}

const Detail =(props:IProps)=>{

    const { route }=props;
    
    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
}

export default Detail;