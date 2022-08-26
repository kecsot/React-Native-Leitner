import React from 'react';
import {View} from "react-native";

const BaseView = (props) => {

    return (
        <View style={props.style}>
            {props.children}
        </View>
    );
};


export default BaseView;