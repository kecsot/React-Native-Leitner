import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {connect} from "react-redux";
import {
    cardListErrorMessage,
    getCardList,
    isCardListErrorHappened,
    isCardListLoading,
} from "../../../application/selectors/cards";
import BaseLoadingIndicator from "../../components/Base/BaseLoadingIndicator";
import BaseView from "../../components/Base/BaseView";
import EmptyListView from "../../components/Base/EmptyListView";
import ErrorView from "../../components/Base/ErrorView";
import {loadCardListOfDeck} from "../../../application/actions/cards";
import PropTypes from "prop-types";
import CardModel from "../../../models/CardModel";
import CardItem from "../../components/Card/CardItem";

class CardListContainer extends React.Component {

    componentDidMount() {
        this.props.loadCardListOfDeck(this.props.deckId)
    }

    render() {
        const {cards, isCardListLoading, isErrorHappened} = this.props;

        return (
            <>
                {isErrorHappened && <ErrorView/>}

                {isCardListLoading && !isErrorHappened ? <BaseLoadingIndicator/> :
                    <BaseView>
                        <FlatList
                            data={cards}
                            keyExtractor={(item) => item.id}
                            refreshControl={<RefreshControl
                                refreshing={isCardListLoading}
                                onRefresh={() => {this.props.loadCardListOfDeck(this.props.deckId)}}
                            />}
                            ListEmptyComponent={() => (
                                <EmptyListView>
                                    <Title>You don't have any card!</Title>
                                    <Text>Click to the plus icon to add new cards!</Text>
                                </EmptyListView>
                            )}
                            renderItem={(data) => (
                                <CardItem
                                    card={data.item}
                                    onEditPress={this.props.onEditPress}
                                    onDeletePress={this.props.onDeletePress}/>
                            )}/>
                    </BaseView>
                }

            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        cards: getCardList(state),
        isCardListLoading: isCardListLoading(state),
        isErrorHappened: isCardListErrorHappened(state),
        errorMessage: cardListErrorMessage(state),
    }
}

const mapDispatchToProps = dispatch => ({
    loadCardListOfDeck: (deckId) => {
        dispatch(loadCardListOfDeck(deckId));
    },
})

CardListContainer.propTypes = {
    cards: PropTypes.arrayOf(CardModel).isRequired,
    isCardListLoading: PropTypes.bool.isRequired,
    isErrorHappened: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    loadCardListOfDeck: PropTypes.func.isRequired,

    deckId: PropTypes.string.isRequired,
    onEditPress: PropTypes.func.isRequired,
    onDeletePress: PropTypes.func.isRequired,
    onItemPress: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);