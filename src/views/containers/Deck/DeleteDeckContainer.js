import React from 'react';
import {connect} from "react-redux";
import {
    deckDeleteErrorMessage, isDeckDeleteErrorHappened, isDeckDeleteLoading, isDeckDeleteSuccess
} from "../../../application/selectors/decks";
import {deleteDeckById} from "../../../application/actions/decks";
import PropTypes from "prop-types";
import DeckModel from "../../../models/DeckModel";
import DeleteDeck from "../../components/Deck/DeleteDeck";

class DeleteDeckContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isDeckDeleteSuccess && !prevProps.isDeckDeleteSuccess) {
            this.props.onSuccess();
        }
        if (this.props.isDeckDeleteErrorHappened && !prevProps.isDeckDeleteErrorHappened) {
            this.props.onError();
        }
    }

    render() {
        return (
            <DeleteDeck
                deck={this.props.deck}
                isDeckDeleteSuccess={this.props.isDeckDeleteSuccess}
                isDeckDeleteLoading={this.props.isDeckDeleteLoading}
                isDeckDeleteErrorHappened={this.props.isDeckDeleteErrorHappened}
                deckDeleteErrorMessage={this.props.deckDeleteErrorMessage}

                onAgree={() => {
                    this.props.deleteDeckById(this.props.deck.id)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isDeckDeleteSuccess: isDeckDeleteSuccess(state),
        isDeckDeleteLoading: isDeckDeleteLoading(state),
        isDeckDeleteErrorHappened: isDeckDeleteErrorHappened(state),
        deckDeleteErrorMessage: deckDeleteErrorMessage(state)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteDeckById: (deckId) => {
        dispatch(deleteDeckById(deckId));
    }
})

DeleteDeckContainer.propTypes = {
    isDeckDeleteSuccess: PropTypes.bool.isRequired,
    isDeckDeleteLoading: PropTypes.bool.isRequired,
    isDeckDeleteErrorHappened: PropTypes.bool.isRequired,
    deckDeleteErrorMessage: PropTypes.string,
    deleteDeckById: PropTypes.func.isRequired,

    deck: PropTypes.instanceOf(DeckModel).isRequired,
    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDeckContainer);