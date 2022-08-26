import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import Main from './src/Main';
import {reduxStore} from './src/application/store';
import {logout} from "./src/application/actions/auth";
import setupAxiosInterceptors from "./src/services/http/interceptors";
import 'react-native-gesture-handler';

export default function App() {
    return (
        <Provider store={reduxStore}>
            <PaperProvider>
                <Main/>
            </PaperProvider>
        </Provider>
    );
}

const {dispatch} = reduxStore;
setupAxiosInterceptors(() => {
    dispatch(logout())
});

AppRegistry.registerComponent(appName, () => Main);