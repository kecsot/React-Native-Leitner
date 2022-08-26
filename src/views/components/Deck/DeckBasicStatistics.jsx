import React from "react";
import {Text, View} from "react-native";
import PropTypes from 'prop-types';
import CardModel from "../../../models/CardModel";
import DeckModel from "../../../models/DeckModel";

export default function DeckBasicStatistics(props) {
    return (
        <View>
            <Text>
                Number of cards: {props.cards.length}
            </Text>
            <Text>
                Due cards: 0
            </Text>
        </View>
    );
}

DeckBasicStatistics.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.instanceOf(CardModel).isRequired
    ).isRequired,
};