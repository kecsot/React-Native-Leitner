import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {StyleSheet} from "react-native";

const BaseLoadingIndicator = (props) => {

    return (
        <ActivityIndicator
            style={styles.indicator}
            animating={true}
            size={48}
            color={Colors.blue800}/>
    );
};

let styles = StyleSheet.create({
    indicator: {
        marginTop: 32
    }
});

export default BaseLoadingIndicator;