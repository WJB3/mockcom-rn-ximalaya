import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Alert } from 'react-native';
import { ILikes } from '@/models/home';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Touchable';

interface IProps {
    data?: ILikes[];
    onRefresh?:Function
}


const Guess = (props: IProps) => {

    const { data,onRefresh } = props;

    const renderItem = ({ item }: { item: ILikes }) => {
        return (
            <Touchable
                style={styles.item}
                onPress={() => alert('3')}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <Text numberOfLines={2}>{item.title}</Text>
            </Touchable>
        )
    }

    const handleRefesh=()=>{
        onRefresh?.()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Icon name={"icon-cainixihuan1"} />
                    <Text style={styles.headerTitle}>猜你喜欢</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.moreText}>更多</Text>
                    <Icon name={'icon-youjiantou'} size={12} />
                </View>
            </View>
            <FlatList
                data={data}
                style={styles.list}
                renderItem={renderItem}
                numColumns={3}
            />
            <Touchable style={styles.changeGuess} onPress={handleRefesh}>
                <Icon name={'icon-shuaxin'} color='red' />
                <Text style={styles.refresh}>换一批</Text>
            </Touchable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 16
    },
    item: {
        flex: 1,
        marginVertical: 6,
        marginHorizontal: 8
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 8,
        marginBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#efefef',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        marginLeft: 5,
        color: "#333"
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    moreText: {
        color: "#6f6f6f"
    },
    changeGuess:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    refresh:{
        marginLeft:5
    },
    list:{
        padding:10
    }
});

export default React.memo<any>(Guess);