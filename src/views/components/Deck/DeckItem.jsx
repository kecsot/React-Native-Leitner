import React from 'react';
import PropTypes from 'prop-types';
import {Card, Colors, IconButton} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import DeckModel from "../../../models/DeckModel";

export default function DeckItem(props) {

    return (
        <Card
            style={styles.card}
            onPress={() => props.onItemPress(props.deck)}>
            <Card.Title
                title={props.deck.title}
                subtitle={props.deck.description}
                right={() =>
                    <View style={styles.iconButtons}>
                        <IconButton
                            icon="pencil"
                            color={Colors.grey700}
                            size={20}
                            onPress={() => {
                                props.onEditPress(props.deck)
                            }}
                        />
                        <IconButton
                            icon="delete"
                            color={Colors.red400}
                            size={20}
                            onPress={() => {
                                props.onDeletePress(props.deck)
                            }}
                        />
                    </View>
                }/>
        </Card>
    );
}

DeckItem.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,
    onItemPress: PropTypes.func.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onDeletePress: PropTypes.func.isRequired,
};

let styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginTop: 10
    },
    iconButtons: {
        display: "flex",
        flexDirection: "row"
    },
    cardActions: {
        marginLeft: "auto"
    },
    learnButton: {
        marginRight: 10
    },
});