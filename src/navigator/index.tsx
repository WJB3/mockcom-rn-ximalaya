import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
}

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
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center'
            }}>
                <Stack.Screen options={{
                    headerTitleAlign: 'left',
                    headerTitle:'首页'
                }} name="Home" component={Home}></Stack.Screen>
                <Stack.Screen options={{
                    headerTitleAlign: 'left',
                    headerTitle:'详情页'
                }} name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator;