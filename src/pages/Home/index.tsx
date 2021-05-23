import React, { useEffect } from 'react';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux';
import { ScrollView, FlatList, View, Text, ListRenderItemInfo } from 'react-native';
import { RootState } from '@/models/index';
import Carousel from './Carousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';
import { IChannel } from '@/models/home';


const mapStateToProps = ({ loading, home }: RootState) => ({
    carousels: home.carousels,
    likes: home.guessLikes,
    channels: home.channels,
    loading: loading.effects['home/asyncAdd']
})

const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
    navigation: RootStackNavigation
}

const Home = (props: IProps) => {

    const { channels, carousels, likes, dispatch, loading } = props;

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

    const keyExtractor=(item:IChannel)=>{
        return item.id;
    }

    return ( 
        <FlatList
            data={channels}
            ListHeaderComponent={header}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}



export default connector(Home);