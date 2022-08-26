import React from 'react';
import {View} from 'react-native';
import ErrorView from "../Base/ErrorView";
import BaseLoadingIndicator from "../Base/BaseLoadingIndicator";
import Question from "../Base/Question";
import {Headline, Paragraph} from "react-native-paper";
import PropTypes from "prop-types";
import DeckModel from "../../../models/DeckModel";

export default class DeleteDeck extends React.Component {

    render() {
        return (
            <View>
                {this.props.isDeckDeleteErrorHappened && <ErrorView/>}
                {this.props.isDeckDeleteLoading && <BaseLoadingIndicator/>}

                <Question
                    agreeButtonText="Delete"
                    cancelButtonText="Cancel"
                    onAgree={this.props.onAgree}
                    onCancel={this.props.onCancel}>
                    <Headline>Delete deck</Headline>
                    <Paragraph>All card inside this deck will be deleted!</Paragraph>
                    <Paragraph>Deck name: {this.props.deck.title}</Paragraph>
                </Question>
            </View>
        );
    }
}

DeleteDeck.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,

    isDeckDeleteLoading: PropTypes.bool.isRequired,
    isDeckDeleteSuccess: PropTypes.bool.isRequired,
    isDeckDeleteErrorHappened: PropTypes.bool.isRequired,
    deckDeleteErrorMessage: PropTypes.string,

    onAgree: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
};