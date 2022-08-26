import React from 'react';
import {Keyboard, View} from 'react-native';
import DeckItemForm from "./DeckItemForm";
import ErrorView from "../Base/ErrorView";
import BaseLoadingIndicator from "../Base/BaseLoadingIndicator";
import PropTypes from "prop-types";
import {Button} from "react-native-paper";

export default class AddDeck extends React.Component {

    render() {
        return (
            <View>
                {this.props.isDeckAddErrorHappened && <ErrorView/>}

                <DeckItemForm
                    actionButtonText={"Add deck"}
                    onSubmit={this.props.onAgree}
                />
                <Button
                    mode="outlined"
                    onPress={() => this.props.onCancel()}>
                    Cancel
                </Button>
                {this.props.isDeckAddLoading && <BaseLoadingIndicator/>}
            </View>
        );
    }
}

AddDeck.propTypes = {
    isDeckAddSuccess: PropTypes.bool.isRequired,
    isDeckAddLoading: PropTypes.bool.isRequired,
    isDeckAddErrorHappened: PropTypes.bool.isRequired,
    deckAddErrorMessage: PropTypes.string,

    onAgree: PropTypes.func,
    onCancel: PropTypes.func
};
