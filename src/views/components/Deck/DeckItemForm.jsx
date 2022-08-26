import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";

export default class DeckItemForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        }

        this.formikRef = React.createRef();
    }

    disableForm() {
        this.setState({
            disabled: true
        })
    }

    render() {
        const validate = (values) => {
            const errors = {};

            // TODO: max char! deckName,Description
            if (values.title.trim().length < 3) {
                errors.title = 'Minimum length is 3';
            }

            return errors;
        };

        // TODO: Repetition system
        return (
            <Formik
                innerRef={ref => (this.formikRef = ref)}
                initialValues={{
                    title: this.props.title ?? "",
                    description: this.props.description ?? ""
                }}
                onSubmit={(values, actions) => this.props.onSubmit(values)}
                validate={(values) => validate(values)}>

                {(formikProps) =>
                    <View style={styles.container}>
                        <TextInput
                            name="titleInput"
                            style={styles.title}
                            label="Deck title"
                            mode="outlined"
                            disabled={this.state.disabled}
                            error={formikProps.errors.title != null}
                            value={formikProps.values.title}
                            onChangeText={formikProps.handleChange('title')}/>

                        <TextInput
                            name="descriptionInput"
                            style={styles.description}
                            label="Description"
                            multiline={true}
                            numberOfLines={4}
                            mode="outlined"
                            disabled={this.state.disabled}
                            error={formikProps.errors.description != null}
                            value={formikProps.values.description}
                            onChangeText={formikProps.handleChange('description')}/>

                        <Button
                            style={styles.actionButton}
                            icon="content-save"
                            mode="contained"
                            disabled={this.state.disabled || !this.formikRef.dirty}
                            onPress={() => formikProps.handleSubmit()}>
                            {this.props.actionButtonText}
                        </Button>
                    </View>
                }
            </Formik>
        );
    }
}

DeckItemForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    actionButtonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    title: {
        marginBottom: 10
    },
    description: {
        marginBottom: 10
    },
    actionButton: {
        marginBottom: 10
    }
});


