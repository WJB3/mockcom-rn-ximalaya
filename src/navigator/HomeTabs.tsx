import React from 'react';
import { createMaterialTopTabNavigator,MaterialTopTabBar, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import TopTabBarWrapper from '@/pages/views/TopTabBarWrapper'
import { StyleSheet } from 'react-native';

const Tabs=createMaterialTopTabNavigator();

const HomeTabs=()=>{

    const renderTabbar=(props:MaterialTopTabBarProps)=>{
        return <TopTabBarWrapper {...props} />
    }

    return (
        <Tabs.Navigator
            lazy
            tabBar={renderTabbar}
            sceneContainerStyle={styles.sceneContainerStyle}
            tabBarOptions={{
                scrollEnabled:true,
                tabStyle:{
                    width:80
                },
                indicatorStyle:{
                    height:4,
                    width:20,
                    marginLeft:30,
                    borderRadius:2,
                    backgroundColor:'#f86442'
                },
                activeTintColor:'#f86442',
                inactiveTintColor:'#333'
            }}
        >
            <Tabs.Screen name="Home" component={Home} options={{tabBarLabel:"推荐"}} />  
        </Tabs.Navigator>
    )
}

const styles=StyleSheet.create({
    sceneContainerStyle:{
        backgroundColor:'transparent'
    }
})

export default HomeTabs;