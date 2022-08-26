import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import PropTypes from "prop-types";

const Question = (props) => {

    return (
        <View>
            {props.children}

            <View style={styles.buttons}>
                <Button style={styles.button}
                        icon="delete"
                        mode="contained"
                        onPress={() => props.onAgree()}>
                    Delete
                </Button>
                <Button style={styles.button}
                        mode="outlined"
                        onPress={() => props.onCancel()}>
                    Cancel
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    button: {
        maxWidth: "30%",
    }
});

Question.propTypes = {
    onCancel: PropTypes.func.isRequired,
    cancelButtonText: PropTypes.string.isRequired,
    onAgree: PropTypes.func.isRequired,
    agreeButtonText: PropTypes.string.isRequired
};

export default Question;