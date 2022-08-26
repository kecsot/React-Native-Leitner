import React from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as PropTypes from "prop-types";
import {StyleSheet, View} from "react-native";

export default class CardItemForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: false
        }

        this.formikRef = React.createRef();
        this.frontTextFieldRef = React.createRef();
    }

    resetForm() {
        this.formikRef.resetForm()
        this.frontTextFieldRef.current.focus()
    }

    disableForm() {
        this.setState({
            disabled: true
        })
    }

    render() {
        const validate = (values) => {
            const errors = {};
// TODO: max char!
            if (values.frontText.trim().length < 3) {
                errors.frontText = 'Minimum length is 3';
            }
            if (values.backText.trim().length < 3) {
                errors.backText = 'Minimum length is 3';
            }

            return errors;
        };


        return (
            <Formik
                innerRef={reference => (this.formikRef = reference)}
                initialValues={{
                    frontText: this.props.frontText ?? "",
                    backText: this.props.backText ?? ""
                }}
                onSubmit={(values, actions) => this.props.onSubmit(values)}
                validate={(values) => validate(values)}>

                {(formikProps) =>
                    <View>
                        <TextInput
                            ref={this.frontTextFieldRef}
                            name="frontTextInput"
                            style={styles.frontText}
                            label="Front side"
                            mode="outlined"
                            disabled={this.state.disabled}
                            error={formikProps.errors.frontText != null}
                            value={formikProps.values.frontText}
                            onChangeText={formikProps.handleChange('frontText')}/>

                        <TextInput
                            name="backTextInput"
                            style={styles.backText}
                            label="Back side"
                            mode="outlined"
                            disabled={this.state.disabled}
                            error={formikProps.errors.backText != null}
                            value={formikProps.values.backText}
                            onChangeText={formikProps.handleChange('backText')}/>

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

CardItemForm.propTypes = {
    frontText: PropTypes.string,
    backText: PropTypes.string,
    actionButtonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    frontText: {
        marginBottom: 10
    },
    backText: {
        marginBottom: 10
    },
    actionButton: {
        marginBottom: 10
    }
});


