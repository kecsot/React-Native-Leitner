import React from 'react';
import PropTypes from 'prop-types';
import {Card, Colors, IconButton} from 'react-native-paper';
import {Image, StyleSheet, Text, View} from "react-native";
import CardModel from "../../../models/CardModel";
import cardIcon from "../../../../assets/ic_icon_card.png";

export default function CardItem(props) {

    return (
        <Card style={styles.card}>
            <View style={styles.row}>
                <Image style={styles.cardIcon} source={cardIcon}/>
                <View style={styles.texts}>
                    <Text>{props.card.frontText}</Text>
                    <Text>{props.card.backText}</Text>
                </View>

                <View style={styles.iconButtons}>
                    <IconButton
                        icon="pencil"
                        color={Colors.grey700}
                        size={20}
                        onPress={() => {
                            props.onEditPress(props.card)
                        }}
                    />
                    <IconButton
                        icon="delete"
                        color={Colors.red400}
                        size={20}
                        onPress={() => {
                            props.onDeletePress(props.card)
                        }}
                    />
                </View>
            </View>

        </Card>
    );
}

CardItem.propTypes = {
    card: PropTypes.instanceOf(CardModel).isRequired,

    onEditPress: PropTypes.func.isRequired,
    onDeletePress: PropTypes.func.isRequired
};

let styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    texts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 10
    },
    cardIcon: {
        width: 36,
        height: 36
    },
    iconButtons: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto"
    },
});