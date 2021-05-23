import React from 'react';
import Navigator from '@/navigator/index'
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import '@/config/http';
import store from '@/config/dva';

const Main = () => {
    return (
        <Provider store={store}>
            <Navigator />
            <StatusBar 
                backgroundColor="transparent" 
                barStyle="dark-content" 
                translucent    
            />
        </Provider>
    );
}

export default Main;