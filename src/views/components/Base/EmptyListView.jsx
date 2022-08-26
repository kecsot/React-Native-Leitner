import React from 'react';
import {Surface} from 'react-native-paper';
import {StyleSheet} from "react-native";

const EmptyListView = (props) => {

    return (
        <Surface style={styles.surface}>
            {props.children}
        </Surface>
    );
};

const styles = StyleSheet.create({
    surface: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
});


export default EmptyListView;