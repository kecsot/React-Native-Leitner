import React from "react";
import {FlatList} from "react-native";
import CardItem from "./CardItem";
import PropTypes from 'prop-types';
import CardModel from "../../../models/CardModel";

export default function CardList(props) {
    return (
        <FlatList
            style={props.style}
            data={props.cards}
            refreshControl={props.refreshControl}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={props.ListEmptyComponent}
            renderItem={(data) => (
                <CardItem
                    card={data.item}
                    onDeletePressed={props.onDeletePress}
                    onEditPressed={props.onEditPress}/>
            )}/>
    );
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.instanceOf(CardModel).isRequired
    ).isRequired,
    onEditPressed: PropTypes.func.isRequired,
    onDeletePressed: PropTypes.func.isRequired,
};