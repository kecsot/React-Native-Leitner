import React from 'react';
import {connect} from "react-redux";
import {
    cardDeleteErrorMessage, isCardDeleteErrorHappened, isCardDeleteLoading, isCardDeleteSuccess
} from "../../../application/selectors/cards";
import {deleteCardById} from "../../../application/actions/cards";
import PropTypes from "prop-types";
import CardModel from "../../../models/CardModel";
import DeleteCard from "../../components/Card/DeleteCard";

class DeleteCardContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isCardDeleteSuccess && !prevProps.isCardDeleteSuccess) {
            this.props.onSuccess();
        }
        if (this.props.isCardDeleteErrorHappened && !prevProps.isCardDeleteErrorHappened) {
            this.props.onError();
        }
    }

    render() {
        return (
            <DeleteCard
                card={this.props.card}
                isCardDeleteSuccess={this.props.isCardDeleteSuccess}
                isCardDeleteLoading={this.props.isCardDeleteLoading}
                isCardDeleteErrorHappened={this.props.isCardDeleteErrorHappened}
                cardDeleteErrorMessage={this.props.cardDeleteErrorMessage}

                onAgree={() => {
                    this.props.deleteCardById(this.props.card.id)
                }}
                onCancel={this.props.onCancel}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        isCardDeleteSuccess: isCardDeleteSuccess(state),
        isCardDeleteLoading: isCardDeleteLoading(state),
        isCardDeleteErrorHappened: isCardDeleteErrorHappened(state),
        cardDeleteErrorMessage: cardDeleteErrorMessage(state)
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCardById: (cardId) => {
        dispatch(deleteCardById(cardId));
    }
})

DeleteCardContainer.propTypes = {
    isCardDeleteSuccess: PropTypes.bool.isRequired,
    isCardDeleteLoading: PropTypes.bool.isRequired,
    isCardDeleteErrorHappened: PropTypes.bool.isRequired,
    cardDeleteErrorMessage: PropTypes.string,
    deleteCardById: PropTypes.func.isRequired,

    card: PropTypes.instanceOf(CardModel).isRequired,
    onCancel: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCardContainer);