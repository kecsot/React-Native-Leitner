import React from 'react';
import {Keyboard, View} from 'react-native';
import DeckItemForm from "./DeckItemForm";
import ErrorView from "../Base/ErrorView";
import BaseLoadingIndicator from "../Base/BaseLoadingIndicator";
import PropTypes from "prop-types";
import DeckModel from "../../../models/DeckModel";
import {Button} from "react-native-paper";

export default class EditDeck extends React.Component {

    render() {
        return (
            <View>
                {this.props.isDeckUpdateErrorHappened && <ErrorView/>}
                {this.props.isDeckUpdateLoading && <BaseLoadingIndicator/>}

                {this.props.deck && <DeckItemForm
                    title={this.props.deck.title}
                    description={this.props.deck.description}
                    actionButtonText={"Save deck"}
                    onSubmit={this.props.onAgree}
                />}
                <Button
                    mode="outlined"
                    onPress={this.props.onCancel}>
                    Cancel
                </Button>
            </View>
        );
    }
}

EditDeck.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,
    isDeckUpdateSuccess: PropTypes.bool.isRequired,
    isDeckUpdateLoading: PropTypes.bool.isRequired,
    isDeckUpdateErrorHappened: PropTypes.bool.isRequired,
    deckUpdateErrorMessage: PropTypes.string,

    onAgree: PropTypes.func,
    onCancel: PropTypes.func
};