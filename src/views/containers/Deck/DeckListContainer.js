import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {connect} from "react-redux";
import {
    deckListErrorMessage,
    getDeckList,
    isDeckListErrorHappened,
    isDeckListLoading,
} from "../../../application/selectors/decks";
import BaseLoadingIndicator from "../../components/Base/BaseLoadingIndicator";
import BaseView from "../../components/Base/BaseView";
import EmptyListView from "../../components/Base/EmptyListView";
import ErrorView from "../../components/Base/ErrorView";
import {loadDecks} from "../../../application/actions/decks";
import PropTypes from "prop-types";
import DeckModel from "../../../models/DeckModel";
import DeckItem from "../../components/Deck/DeckItem";

class DeckListContainer extends React.Component {

    componentDidMount() {
        this.props.loadDecks()
    }

    render() {
        const {decks, isDeckListLoading, isErrorHappened} = this.props;

        return (
            <>
                {isErrorHappened && <ErrorView/>}

                {isDeckListLoading && !isErrorHappened ? <BaseLoadingIndicator/> :
                    <BaseView>
                        <FlatList
                            data={decks}
                            keyExtractor={(item) => item.id}
                            refreshControl={<RefreshControl
                                refreshing={isDeckListLoading}
                                onRefresh={this.props.loadDecks}
                            />}
                            ListEmptyComponent={() => (
                                <EmptyListView>
                                    <Title>You don't have any deck!</Title>
                                    <Text>Click to the plus icon to add new decks!</Text>
                                </EmptyListView>
                            )}
                            renderItem={(data) => (
                                <DeckItem
                                    deck={data.item}
                                    onEditPress={this.props.onEditPress}
                                    onDeletePress={this.props.onDeletePress}
                                    onItemPress={this.props.onItemPress}/>
                            )}/>
                    </BaseView>
                }

            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        decks: getDeckList(state),
        isDeckListLoading: isDeckListLoading(state),
        isErrorHappened: isDeckListErrorHappened(state),
        errorMessage: deckListErrorMessage(state),
    }
}

const mapDispatchToProps = dispatch => ({
    loadDecks: () => {
        dispatch(loadDecks());
    }
})

DeckListContainer.propTypes = {
    decks: PropTypes.arrayOf(DeckModel).isRequired,
    isDeckListLoading: PropTypes.bool.isRequired,
    isErrorHappened: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    loadDecks: PropTypes.func.isRequired,

    onEditPress: PropTypes.func.isRequired,
    onDeletePress: PropTypes.func.isRequired,
    onItemPress: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckListContainer);