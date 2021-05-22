import React, { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, RouteProp, TabNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/pages/Home';
import Account from '@/pages/Account';
import Found from '@/pages/Found';
import Listen from '@/pages/Listen';
import { RootStackNavigation, RootStackParamList } from './index';
import Icon from '@/assets/iconfont'
import HomeTabs from './HomeTabs';

export type BottomTabParamList = {
    HomeTabs: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route=RouteProp<RootStackParamList,'BottomTabs'> & {
    state?:any;
}

interface IProps{
    navigation:RootStackNavigation,
    route:Route
}

function getHeaderTitle(route:Route){
    const routeName=getFocusedRouteNameFromRoute(route);
    switch(routeName){
        case 'Home':
            return '首页';
        case 'Listen':
            return '我听';
        case 'Found':
            return '发现';
        case 'Account':
            return '账户';
        default:
            return '首页';
    }
}

const BottomTabs = (props:IProps) => {

    const { navigation,route }=props;

    useEffect(()=>{ 
        navigation.setOptions({
            headerTitle:getHeaderTitle(route)
        })
    },[route]);
    
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f86442'
            }}
        >
            <Tab.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ 
                    tabBarLabel:"首页",
                    tabBarIcon:({color,size})=><Icon name="icon-shouye" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Listen"
                component={Listen}
                options={{ 
                    tabBarLabel:"我听",
                    tabBarIcon:({color,size})=><Icon name="icon-shoucang" color={color} size={size} />
                }}
            />

            <Tab.Screen
                name="Found"
                component={Found}
                options={{ 
                    tabBarLabel:"发现",
                    tabBarIcon:({color,size})=><Icon name="icon-faxian" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{ 
                    tabBarLabel:"我的",
                    tabBarIcon:({color,size})=><Icon name="icon-wodedangxuan" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs;

