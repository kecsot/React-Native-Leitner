import React from 'react';
import {connect} from "react-redux";
import {
    cardAddErrorMessage,
    isCardAddErrorHappened,
    isCardAddLoading,
    isCardAddSuccess
} from "../../../application/selectors/cards";
import {addCard} from "../../../application/actions/cards";
import AddCard from "../../components/Card/AddCard";
import PropTypes from "prop-types";

import CardModel from "../../../models/CardModel";

class AddCardContainer extends React.Component {

    addCard(deckId, values) {
        let card = new CardModel();
        card.frontText = values.frontText;
        card.backText = values.backText;
        card.deckId = this.props.deckId;

        this.props.addCardToDeck(card)
    }

    render() {
        return (
            <AddCard
                isCardAddSuccess={this.props.isCardAddSuccess}
                isCardAddLoading={this.props.isCardAddLoading}
                isCardAddErrorHappened={this.props.isCardAddErrorHappened}
                cardAddErrorMessage={this.props.cardAddErrorMessage}
                onAgree={(values) => {
                    this.addCard(values.title, values.description)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isCardAddSuccess: isCardAddSuccess(state),
        isCardAddLoading: isCardAddLoading(state),
        isCardAddErrorHappened: isCardAddErrorHappened(state),
        cardAddErrorMessage: cardAddErrorMessage(state),
    }
}

const mapDispatchToProps = dispatch => ({
    addCardToDeck: (card) => {
        dispatch(addCard(card))
    },
})

AddCardContainer.propTypes = {
    isCardAddSuccess: PropTypes.bool.isRequired,
    isCardAddLoading: PropTypes.bool.isRequired,
    isCardAddErrorHappened: PropTypes.bool.isRequired,
    cardAddErrorMessage: PropTypes.string,
    addCardToDeck: PropTypes.func.isRequired,

    deckId: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onSuccess: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardContainer);