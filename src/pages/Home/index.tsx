import React, { useEffect, useState } from 'react';
import { RootStackNavigation } from '@/navigator/index'
import { connect, ConnectedProps } from 'react-redux';
import { ScrollView, FlatList, View, Text, NativeSyntheticEvent, ListRenderItemInfo, StyleSheet, NativeScrollEvent } from 'react-native';
import { RootState } from '@/models/index';
import Carousel, { slideHeight } from './Carousel';
import Guess from './Guess';
import ChannelItem from './ChannelItem';
import { IChannel } from '@/models/home';


const mapStateToProps = ({ loading, home }: RootState) => ({
    carousels: home.carousels,
    likes: home.guessLikes,
    channels: home.channels,
    hasMore: home.pagination.hasMore,
    activeCarouselIndex: home.activeCarouselIndex,
    gradientVisible: home.gradientVisible,
    loading: loading.effects['home/fetchChannels'],
})

const connector = connect(mapStateToProps)

export type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
    navigation: RootStackNavigation
}

const Home = (props: IProps) => {

    const { channels, carousels, likes, dispatch, activeCarouselIndex, hasMore, loading, gradientVisible } = props;

    const [refreshing, setRefresh] = useState(false);

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

    const handlePress = (data: IChannel) => {
        console.log("data", data)
    }

    useEffect(() => {
        fetchCarousels()
        fetchGuessLikes()
        fetchChannels()
    }, []);

    const renderItem = ({ item }: ListRenderItemInfo<IChannel>) => {
        return <ChannelItem data={item} onPress={handlePress} />
    }

    const handleSnapToItem = (index: number) => {
        console.log("handleSnapToItem", index)
        dispatch({
            type: 'home/setState',
            payload: {
                activeCarouselIndex: index
            }
        })
    }

    console.log("activeCarouselIndex", carousels)

    const header = (
        <View>
            <Carousel data={carousels} activeCarouselIndex={activeCarouselIndex} onSnapToItem={handleSnapToItem} />
            <View style={styles.background}>
                <Guess data={likes} onRefresh={fetchGuessLikes} /> 
            </View>
        </View>
    )

    const footer = () => {
        if (!hasMore) {
            return (
                <View style={styles.end}>
                    <Text>我是有底线的</Text>
                </View>
            )
        }
        if (loading && hasMore && channels.length > 0) {
            return (
                <View style={styles.end}>
                    <Text>正在加载中...</Text>
                </View>
            )
        }
        return <Text></Text>
    }

    const keyExtractor = (item: IChannel) => {
        return item.id;
    }

    const onEndReached = () => {
        if (loading || !hasMore) {
            return;
        }
        console.log("加载更多--")
        dispatch({
            type: 'home/fetchChannels',
            payload: {
                loadMore: true
            }
        })
    }

    const empty = () => {
        if (loading) return <Text></Text>;
        return (
            <View style={styles.empty}>
                <Text>暂无数据</Text>
            </View>
        )
    }

    const handleRefresh = () => {
        setRefresh(true);
        dispatch({
            type: 'home/fetchChannels',
            callback: () => {
                setRefresh(false);
            }
        })
    }

    const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = nativeEvent.contentOffset.y;
        let newGradientVisible = offsetY < slideHeight;

        if (gradientVisible !== newGradientVisible) {
            dispatch({
                type: 'home/setState',
                payload: {
                    gradientVisible:newGradientVisible
                }
            })
        }

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
            onRefresh={handleRefresh}
            refreshing={refreshing}
            onScroll={handleScroll}
        />
    )
}

const styles = StyleSheet.create({
    end: {
        alignItems: 'center',
        paddingVertical: 10
    },
    empty: {
        alignItems: 'center',
        paddingVertical: 100
    },
    background:{
        backgroundColor:'#fff'
    }
})


export default connector(Home);