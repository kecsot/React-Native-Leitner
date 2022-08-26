import React from 'react';
import {View} from 'react-native';
import ErrorView from "../Base/ErrorView";
import BaseLoadingIndicator from "../Base/BaseLoadingIndicator";
import Question from "../Base/Question";
import {Headline, Paragraph} from "react-native-paper";
import PropTypes from "prop-types";
import CardModel from "../../../models/CardModel";

export default class DeleteCard extends React.Component {

    render() {
        return (
            <View>
                {this.props.isCardDeleteErrorHappened && <ErrorView/>}
                {this.props.isCardDeleteLoading && <BaseLoadingIndicator/>}

                <Question
                    agreeButtonText="Delete"
                    cancelButtonText="Cancel"
                    onAgree={this.onAgree}
                    onCancel={this.onCancel}>
                    <Headline>Delete card</Headline>
                    <Paragraph>Front text: {this.props.card.frontText}</Paragraph>
                    <Paragraph>Back text: {this.props.card.backText}</Paragraph>
                </Question>
            </View>
        );
    }
}

DeleteCard.propTypes = {
    card: PropTypes.instanceOf(CardModel).isRequired,
    isCardDeleteLoading: PropTypes.bool.isRequired,
    isCardDeleteSuccess: PropTypes.bool.isRequired,
    isCardDeleteErrorHappened: PropTypes.bool.isRequired,
    cardDeleteErrorMessage: PropTypes.string,

    onCancel: PropTypes.func.isRequired,
    onAgree: PropTypes.func.isRequired,
};