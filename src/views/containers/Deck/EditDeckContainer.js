import React from 'react';
import {connect} from "react-redux";
import {
    deckUpdateErrorMessage, isDeckUpdateErrorHappened, isDeckUpdateLoading, isDeckUpdateSuccess
} from "../../../application/selectors/decks";
import {updateDeck} from "../../../application/actions/decks";
import PropTypes from "prop-types";
import EditDeck from "../../components/Deck/EditDeck";
import DeckModel from "../../../models/DeckModel";
import {Keyboard} from "react-native";

class EditDeckContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isDeckUpdateSuccess && !prevProps.isDeckUpdateSuccess) {
            Keyboard.dismiss();
            this.props.onSuccess();
        }
        if (this.props.isDeckUpdateErrorHappened && !prevProps.isDeckUpdateErrorHappened) {
            Keyboard.dismiss();
            this.props.onError();
        }
    }

    updateDeck(oldDeck, values) {
        let newDeck = {
            id: oldDeck.id,
            title: values.title,
            description: values.description
        }

        this.props.updateDeck(newDeck)
    }

    render() {
        return (
            <EditDeck
                deck={this.props.deck}
                isDeckUpdateSuccess={this.props.isDeckUpdateSuccess}
                isDeckUpdateLoading={this.props.isDeckUpdateLoading}
                isDeckUpdateErrorHappened={this.props.isDeckUpdateErrorHappened}
                deckUpdateErrorMessage={this.props.deckUpdateErrorMessage}
                onAgree={(values) => {
                    this.updateDeck(this.props.deck, values)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isDeckUpdateSuccess: isDeckUpdateSuccess(state),
        isDeckUpdateLoading: isDeckUpdateLoading(state),
        isDeckUpdateErrorHappened: isDeckUpdateErrorHappened(state),
        deckUpdateErrorMessage: deckUpdateErrorMessage(state)
    }
}

const mapDispatchToProps = dispatch => ({
    updateDeck: (deck) => {
        dispatch(updateDeck(deck));
    }
})

EditDeckContainer.propTypes = {
    deck: PropTypes.instanceOf(DeckModel).isRequired,
    isDeckUpdateSuccess: PropTypes.bool.isRequired,
    isDeckUpdateLoading: PropTypes.bool.isRequired,
    isDeckUpdateErrorHappened: PropTypes.bool.isRequired,
    deckUpdateErrorMessage: PropTypes.string,
    updateDeck: PropTypes.func.isRequired,

    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeckContainer);