import React from 'react';
import {SafeAreaView} from 'react-native';
import {IconButton} from "react-native-paper";
import BaseModal from "../components/Base/Modal/BaseModal";
import AddCardContainer from "../containers/Card/AddCardContainer";
import EditCardContainer from "../containers/Card/EditCardContainer";
import DeleteCardContainer from "../containers/Card/DeleteCardContainer";
import CardListContainer from "../containers/Card/CardListContainer";

export default class CardsOfDeckScreen extends React.Component {

    constructor(props) {
        super(props);

        this.props.navigation.setOptions({
            headerRight: () =>
                <IconButton
                    icon="plus"
                    size={24}
                    onPress={() => {
                        this.setState({isAddCardVisible: true})
                    }}
                />
        });

        this.state = {
            selectedCardForDelete: null,
            selectedCardForEdit: null,
            isAddCardVisible: false
        }
    }

    hideAddCardModal() {
        this.setState({isAddCardVisible: false});
    }

    setCardToEdit(card) {
        this.setState({selectedCardForEdit: card});
    }

    cancelCardEditing() {
        this.setState({selectedCardForEdit: null});
    }

    setCardToDelete(card) {
        this.setState({selectedCardForDelete: card});
    }

    cancelCardDeleting() {
        this.setState({selectedCardForDelete: null});
    }

    render() {
        return (
            <SafeAreaView>
                <CardListContainer
                    deckId={this.props.route.params.deckItemParameter.id}
                    onDeletePress={(item) => {
                        this.setCardToDelete(item)
                    }}
                    onEditPress={(item) => {
                        this.setCardToEdit(item)
                    }}
                />

                <BaseModal visible={this.state.isAddCardVisible}>
                    <AddCardContainer
                        onSuccess={() => this.hideAddCardModal()}
                        onCancel={() => this.hideAddCardModal()}/>
                </BaseModal>

                { this.state.selectedCardForEdit &&
                    <BaseModal visible={true}>
                        <EditCardContainer
                            card={this.state.selectedCardForEdit}
                            onSuccess={() => this.cancelCardEditing()}
                            onCancel={() => this.cancelCardEditing()}/>
                    </BaseModal>
                }

                { this.state.selectedCardForDelete &&
                    <BaseModal visible={true}>
                        <DeleteCardContainer
                            card={this.state.selectedCardForDelete}
                            onSuccess={() => this.cancelCardDeleting()}
                            onCancel={() => this.cancelCardDeleting()}
                        />
                    </BaseModal>
                }

            </SafeAreaView>
        );
    }
}