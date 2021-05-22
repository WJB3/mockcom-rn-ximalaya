import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, StackNavigationProp } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Account';
import { Platform, StyleSheet } from 'react-native';

export type RootStackParamList = {
    BottomTabs: {
        screen?:string
    };
    Detail: {
        id?:number
    };
}

export type RootStackNavigation=StackNavigationProp<RootStackParamList>;
/**
 * {
 *  Navigator,
 *  Screen
 * }
 */
let Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                headerMode="float"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyleInterpolator:HeaderStyleInterpolators.forUIKit,
                    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled:true,
                    gestureDirection:'horizontal',
                    headerStyle:{
                        ...Platform.select({
                            android:{
                                elevation:0,
                                borderBottomWidth:StyleSheet.hairlineWidth,
                            },
                            ios:{
                                
                            }
                        })
                    }
                }}
            >
                <Stack.Screen options={{
                    headerTitleAlign: 'center'
                }} name="BottomTabs" component={BottomTabs}></Stack.Screen>
                <Stack.Screen options={{
                    headerTitleAlign: 'left',
                    headerTitle:'详情页'
                }} name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator;