import React from 'react';
import {Surface, Text} from 'react-native-paper';
import {Image, StyleSheet} from "react-native";
import emptyBoxImage from "../../../../assets/empty-box.png";

const ErrorView = (props) => {

    return (
        <Surface style={styles.surface}>
            <Image style={styles.image} source={emptyBoxImage}/>
            <Text>Something wrong happened! {props.message}</Text>
        </Surface>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        marginBottom: 20
    },
    surface: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
});

export default ErrorView;