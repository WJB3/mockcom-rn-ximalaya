import React, { useEffect } from 'react';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux';
import { ScrollView, FlatList, View, Text, ListRenderItemInfo, StyleSheet } from 'react-native';
import { RootState } from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';
import { IChannel } from '@/models/home';


const mapStateToProps = ({ loading, home }: RootState) => ({
    carousels: home.carousels,
    likes: home.guessLikes,
    channels: home.channels,
    hasMore:home.pagination.hasMore,
    loading: loading.effects['home/fetchChannels']
})

const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
    navigation: RootStackNavigation
}

const Home = (props: IProps) => {

    const { channels, carousels, likes, dispatch, hasMore,loading } = props;

    const fetchGuessLikes = () => {
        dispatch({
            type: 'home/fetchGuessLikes'
        })
    }

    const fetchChannels = () => {
        dispatch({
            type: 'home/fetchChannels'
        })
    }

    const fetchCarousels = () => {
        dispatch({
            type: 'home/fetchCarousels'
        })
    }

    const handlePress=(data:IChannel)=>{
        console.log("data",data)
    }

    useEffect(() => {
        fetchCarousels()
        fetchGuessLikes()
        fetchChannels()
    }, []);

    const renderItem = ({ item }: ListRenderItemInfo<IChannel>) => {
        return <ChannelItem data={item} onPress={handlePress} />
    }

    const header = (
        <View>
            <Carousel data={carousels} />
            <Guess data={likes} onRefresh={fetchGuessLikes} />
        </View>
    )

    const footer=()=>{
        if(!hasMore){
            return (
                <View style={styles.end}>
                    <Text>我是有底线的</Text>
                </View>
            )
        }
        if(loading && hasMore && channels.length>0){
            return (
                <View style={styles.end}>
                    <Text>正在加载中...</Text>
                </View>
            )
        }
        return <Text></Text>
    } 

    const keyExtractor=(item:IChannel)=>{
        return item.id;
    }

    const onEndReached=()=>{
        if(loading || !hasMore){
            return ;
        }
        console.log("加载更多--")
        dispatch({
            type: 'home/fetchChannels',
            payload:{
                loadMore:true
            }
        })
    }

    const empty=()=>{
        if(loading) return <Text></Text>;
        return (
            <View style={styles.empty}>
                <Text>暂无数据</Text>
            </View>
        )
    }

    return ( 
        <FlatList
            data={channels}
            ListHeaderComponent={header}
            ListFooterComponent={footer}
            ListEmptyComponent={empty}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.2}
        />
    )
}

const styles=StyleSheet.create({
    end:{
        alignItems:'center',
        paddingVertical:10
    },
    empty:{
        alignItems:'center',
        paddingVertical:100
    }
})


export default connector(Home);