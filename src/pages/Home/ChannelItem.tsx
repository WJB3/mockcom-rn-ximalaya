import { IChannel } from '@/models/home';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Touchable';

interface IProps {
    data: IChannel;
    onPress?:Function;
}

const ChannelItem = (props: IProps) => {

    const { data,onPress } = props;

    const handlePress=()=>{
        onPress?.(data)
    }

    return (
        <Touchable onPress={handlePress}>
            <View style={styles.container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
                    <Text style={styles.remark} numberOfLines={2}>{data.remark}</Text>
                    <View style={styles.buttom}>
                        <View style={styles.playedView}>
                            <Icon name={'icon-kefu'} size={14} />
                            <Text style={styles.number}>{data.played}</Text>
                        </View>
                        <View style={styles.playingView}>
                            <Icon name={'icon-tingge'} size={14} />
                            <Text style={styles.number}>{data.playing}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Touchable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: '#dedede'
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    remark: {
        backgroundColor: "#f8f8f8",
        padding: 5,
        marginBottom: 5
    },
    buttom: {
        flexDirection: 'row',

    },
    playedView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    playingView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        marginLeft: 5
    }
})

export default React.memo(ChannelItem);