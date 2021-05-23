import React, { useEffect } from 'react';
import { RootStackNavigation } from '@/navigator/index'
import { connect,ConnectedProps } from 'react-redux';
import { View,Text,Button } from 'react-native';
import { RootState } from '@/models/index';
import Carousel from './Carousel';


const mapStateToProps=({loading,home}:RootState)=>({
    carousels:home.carousels,
    loading:loading.effects['home/asyncAdd']
})

const connector=connect(mapStateToProps)

type ModelState=ConnectedProps<typeof connector>;
interface IProps extends ModelState {
    navigation:RootStackNavigation
}

const Home = (props:IProps)=>{

    const { navigation,carousels,dispatch,loading }=props;

    const handlePress=()=>{
        console.log('navigation',navigation)
        navigation.navigate("Detail",{
            id:100
        });
    }

    const handleAdd=()=>{
        dispatch({
            type:'home/add', 
            payload:{
                num:1
            }
        })
    }

    const handleAddAsync=()=>{
        dispatch({
            type:'home/asyncAdd', 
            payload:{
                num:2
            }
        })
    }

    useEffect(()=>{
        dispatch({
            type:'home/fetchCarousels'
        })
    },[]);

    return (
        <View>
            <Text>Homaaaaaaasdae </Text>
            <Text>{loading?'正在异步加载中':"正在加"}</Text>
            <Button title="加" onPress={handleAdd}/>
            <Button title="异步加加" onPress={handleAddAsync}/>
            <Button title="跳转到详情页" onPress={handlePress}></Button>
            <Carousel data={carousels} />
        </View>
    )
}



export default connector(Home);