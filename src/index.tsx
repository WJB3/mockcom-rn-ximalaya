import React from 'react';
import Navigator from '@/navigator/index'
import { Provider } from 'react-redux';
import store from '@/config/dva';

const Main=()=>{
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}

export default Main;