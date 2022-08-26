import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const ListHeader = (props) => {

    return (
        <View style={styles.view}>
            <Text>{props.text}</Text>
        </View>
    );
};

let styles = StyleSheet.create({
    view: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default ListHeader;