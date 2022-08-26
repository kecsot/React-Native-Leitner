import React from 'react';
import {SafeAreaView} from 'react-native';
import {IconButton} from "react-native-paper";
import {routingConstants} from "../../_constants/routing.constans";
import BaseModal from "../components/Base/Modal/BaseModal";
import AddDeckContainer from "../containers/Deck/AddDeckContainer";
import EditDeckContainer from "../containers/Deck/EditDeckContainer";
import DeleteDeckContainer from "../containers/Deck/DeleteDeckContainer";
import DeckListContainer from "../containers/Deck/DeckListContainer";

export default class DecksScreen extends React.Component {

    constructor(props) {
        super(props);

        this.props.navigation.setOptions({
            headerRight: () =>
                <IconButton
                    icon="plus"
                    size={24}
                    onPress={() => {
                        this.setState({isAddDeckVisible: true})
                    }}
                />
        });

        this.state = {
            selectedDeckForDelete: null,
            selectedDeckForEdit: null,
            isAddDeckVisible: false
        }
    }

    navigateToCardListOfDeck(deckItem) {
        this.props.navigation.navigate(routingConstants.CARD_LIST_OF_DECK, {deckItemParameter: deckItem})
    }

    hideAddDeckModal() {
        this.setState({isAddDeckVisible: false});
    }

    setDeckToEdit(deck) {
        this.setState({selectedDeckForEdit: deck});
    }

    cancelDeckEditing() {
        this.setState({selectedDeckForEdit: null});
    }

    setDeckToDelete(deck) {
        this.setState({selectedDeckForDelete: deck});
    }

    cancelDeckDeleting() {
        this.setState({selectedDeckForDelete: null});
    }

    render() {
        return (
            <SafeAreaView>
                <DeckListContainer
                    onDeletePress={(item) => {
                        this.setDeckToDelete(item)
                    }}
                    onEditPress={(item) => {
                        this.setDeckToEdit(item)
                    }}
                    onItemPress={(item) => {
                        this.navigateToCardListOfDeck(item)
                    }}
                />

                <BaseModal visible={this.state.isAddDeckVisible}>
                    <AddDeckContainer
                        onSuccess={() => this.hideAddDeckModal()}
                        onCancel={() => this.hideAddDeckModal()}/>
                </BaseModal>

                { this.state.selectedDeckForEdit &&
                    <BaseModal visible={true}>
                        <EditDeckContainer
                            deck={this.state.selectedDeckForEdit}
                            onSuccess={() => this.cancelDeckEditing()}
                            onCancel={() => this.cancelDeckEditing()}/>
                    </BaseModal>
                }

                { this.state.selectedDeckForDelete &&
                    <BaseModal visible={true}>
                        <DeleteDeckContainer
                            deck={this.state.selectedDeckForDelete}
                            onSuccess={() => this.cancelDeckDeleting()}
                            onCancel={() => this.cancelDeckDeleting()}
                        />
                    </BaseModal>
                }

            </SafeAreaView>
        );
    }
}