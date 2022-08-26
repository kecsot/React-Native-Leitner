import React from 'react';
import {StyleSheet} from "react-native";
import WebView from "react-native-webview";
import BaseLoadingIndicator from "./BaseLoadingIndicator";

const WebViewScreen = ({props, route}) => {

    return (
        <WebView
            source={{uri: route.params.uri}}
            renderLoading={BaseLoadingIndicator}
        />
    );
};

let styles = StyleSheet.create({
    modal: {
        padding: 10
    },
    content: {
        backgroundColor: "white",
        padding: 10
    }
});

export default WebViewScreen;