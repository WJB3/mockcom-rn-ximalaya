import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import LinearAnimatedGradientTransition from 'react-native-linear-animated-gradient-transition';
import { connect, ConnectedProps } from 'react-redux';
import Touchable from '@/components/Touchable';
import { RootState } from '@/models/index';

const mapStateToProps = ({ home }: RootState) => ({
    carousels: home.carousels,
    activeCarouselIndex:home.activeCarouselIndex, 
    linearGradientData:home.carousels[home.activeCarouselIndex],
    gradientVisible:home.gradientVisible
})

const connector = connect(mapStateToProps)

type ModelState=ConnectedProps<typeof connector>
  
type IProps =  MaterialTopTabBarProps & ModelState;

const TopTabBarWrapper = (props: IProps) => {

    const { gradientVisible,indicatorStyle,linearGradientData={colors:['#ccc','#fff']} }=props;

    console.log("linearGradientData",gradientVisible)
    let textStyle=styles.textStyle;

    let activeTintColor='#333';

    let newIndicatorStyle=indicatorStyle;

    if(gradientVisible){
        textStyle=styles.whiteTextStyle;
        activeTintColor='#fff';

        if(newIndicatorStyle){
            newIndicatorStyle=StyleSheet.compose(indicatorStyle,styles.whiteBackgroundColor)
        }
    }

    const linearGradient=(
        <LinearAnimatedGradientTransition colors={linearGradientData.colors} style={styles.linearGradient}/>
    )

    return (
        <View style={styles.container}>
            {gradientVisible && linearGradient}
            <View style={styles.topBar}>
                <MaterialTopTabBar  {...props} indicatorStyle={newIndicatorStyle} activeTintColor={activeTintColor} style={styles.tabBar} />
                <Touchable style={styles.categoryButton}>
                    <Text style={textStyle}>
                        分类
                    </Text>
                </Touchable>
            </View>
            <View style={styles.button}>
                <Touchable style={styles.searchBtn}>
                    <Text style={textStyle}>
                        搜索
                    </Text>
                </Touchable>
                <Touchable style={styles.historyBtn}>
                    <Text style={textStyle}>
                        历史记录
                    </Text>
                </Touchable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        backgroundColor: "#fff"
    },
    tabBar: {
        flex: 1,
        elevation: 0,
        overflow:'hidden',
        backgroundColor:'transparent'
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryButton: {
        paddingHorizontal: 10,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: "#ccc"
    },
    button:{
        flexDirection:"row",
        paddingVertical:7,
        paddingHorizontal:15,
        alignItems:'center'
    },
    searchBtn:{
        flex:1,
        paddingLeft:12,
        height:30,
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    historyBtn:{
        marginLeft:24
    },
    linearGradient:{
        ...StyleSheet.absoluteFillObject,
        height:260
    },
    textStyle:{
        color:'#333'
    },
    whiteTextStyle:{
        color:'#fff'
    },
    whiteBackgroundColor:{
        backgroundColor:'#fff'
    }
})

export default connector(TopTabBarWrapper);