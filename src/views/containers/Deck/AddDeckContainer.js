import React from 'react';
import {connect} from "react-redux";
import {
    deckAddErrorMessage,
    isDeckAddErrorHappened,
    isDeckAddLoading,
    isDeckAddSuccess
} from "../../../application/selectors/decks";
import {addDeck} from "../../../application/actions/decks";
import AddDeck from "../../components/Deck/AddDeck";
import PropTypes from "prop-types";
import {Keyboard} from "react-native";

class AddDeckContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isDeckAddSuccess && !prevProps.isDeckAddSuccess) {
            Keyboard.dismiss();
            this.props.onSuccess();
        }
        if (this.props.isDeckAddErrorHappened && !prevProps.isDeckAddErrorHappened) {
            Keyboard.dismiss();
            this.props.onError();
        }
    }

    render() {
        return (
            <AddDeck
                isDeckAddSuccess={this.props.isDeckAddSuccess}
                isDeckAddLoading={this.props.isDeckAddLoading}
                isDeckAddErrorHappened={this.props.isDeckAddErrorHappened}
                deckAddErrorMessage={this.props.deckAddErrorMessage}
                onAgree={(values) => {
                    this.props.addDeck(values.title, values.description)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isDeckAddSuccess: isDeckAddSuccess(state),
        isDeckAddLoading: isDeckAddLoading(state),
        isDeckAddErrorHappened: isDeckAddErrorHappened(state),
        deckAddErrorMessage: deckAddErrorMessage(state),
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: (title, description) => {
        dispatch(addDeck(title, description))
    },
})

AddDeckContainer.propTypes = {
    isDeckAddSuccess: PropTypes.bool.isRequired,
    isDeckAddLoading: PropTypes.bool.isRequired,
    isDeckAddErrorHappened: PropTypes.bool.isRequired,
    deckAddErrorMessage: PropTypes.string,
    addDeck: PropTypes.func.isRequired,

    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeckContainer);