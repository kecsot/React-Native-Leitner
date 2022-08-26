import React from 'react';
import {connect} from "react-redux";
import {
    cardUpdateErrorMessage, isCardUpdateErrorHappened, isCardUpdateLoading, isCardUpdateSuccess
} from "../../../application/selectors/cards";
import {updateCard} from "../../../application/actions/cards";
import PropTypes from "prop-types";
import EditCard from "../../components/Card/EditCard";
import CardModel from "../../../models/CardModel";
import {Keyboard} from "react-native";

class EditCardContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCardUpdateSuccess && !prevProps.isCardUpdateSuccess) {
            Keyboard.dismiss();
            this.props.onSuccess();
        }
        if (this.props.isCardUpdateErrorHappened && !prevProps.isCardUpdateErrorHappened) {
            Keyboard.dismiss();
            this.props.onError();
        }
    }

    updateCard(oldCard, values) {
        let newCard = {
            id: oldCard.id,
            title: values.title,
            description: values.description
        }

        this.props.updateCard(newCard)
    }

    render() {
        return (
            <EditCard
                card={this.props.card}
                isCardUpdateSuccess={this.props.isCardUpdateSuccess}
                isCardUpdateLoading={this.props.isCardUpdateLoading}
                isCardUpdateErrorHappened={this.props.isCardUpdateErrorHappened}
                cardUpdateErrorMessage={this.props.cardUpdateErrorMessage}
                onAgree={(values) => {
                    this.updateCard(this.props.card, values)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isCardUpdateSuccess: isCardUpdateSuccess(state),
        isCardUpdateLoading: isCardUpdateLoading(state),
        isCardUpdateErrorHappened: isCardUpdateErrorHappened(state),
        cardUpdateErrorMessage: cardUpdateErrorMessage(state)
    }
}

const mapDispatchToProps = dispatch => ({
    updateCard: (card) => {
        dispatch(updateCard(card));
    }
})

EditCardContainer.propTypes = {
    card: PropTypes.instanceOf(CardModel).isRequired,
    isCardUpdateSuccess: PropTypes.bool.isRequired,
    isCardUpdateLoading: PropTypes.bool.isRequired,
    isCardUpdateErrorHappened: PropTypes.bool.isRequired,
    cardUpdateErrorMessage: PropTypes.string,
    updateCard: PropTypes.func.isRequired,

    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCardContainer);