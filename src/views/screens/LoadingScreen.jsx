import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from "react-native-paper";

export default class LoadingFullScreen extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView>
                <Text>Loading fullscreen...</Text>
            </SafeAreaView>
        );
    }
}