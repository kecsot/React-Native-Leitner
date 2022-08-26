import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import {StyleSheet, View} from "react-native";

const BaseModal = (props) => {

    return (
        <Portal>
            <Modal dismissable={false} visible={props.visible} onDismiss={props.onDismiss} style={styles.modal}>
                <View style={styles.content}>
                    {props.children}
                </View>
            </Modal>

        </Portal>
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

export default BaseModal;