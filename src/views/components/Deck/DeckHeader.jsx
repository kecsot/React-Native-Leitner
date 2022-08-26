import React from "react";
import {StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import {Card} from "react-native-paper";
import DeckModel from "../../../models/DeckModel";

export default function DeckHeader(props) {
    return (
        <Card style={styles.card}>
            <Card.Title
                title={props.deck.title}
                subtitle={props.deck.description}/>

            {props.children &&
                <Card.Content>
                    {props.children}
                </Card.Content>
            }

        </Card>
    );
}

DeckHeader.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,
};

let styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginTop: 10,
    },
});