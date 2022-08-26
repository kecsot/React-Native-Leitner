import {
    ADD_CARD,
    addCardFailure,
    addCardSuccess,
    DELETE_CARD,
    deleteCardFailure,
    deleteCardSuccess,
    LOAD_CARDS_OF_DECK,
    loadCardsFailure,
    loadCardsSuccess,
    UPDATE_CARD,
    updateCardFailure,
    updateCardSuccess
} from "../actions/cards";

const loadCardsFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOAD_CARDS_OF_DECK) {
        try {
            const deckId = action.payload.deckId;
            const cards = await api.cards.getCardListByDeckId(deckId);
            dispatch(loadCardsSuccess(cards, deckId));
        } catch (error) {
            dispatch(loadCardsFailure());
        }
    }
}

const addCardFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === ADD_CARD) {
        try {
            let card = await api.cards.addCardToDeck(action.payload.card);
            dispatch(addCardSuccess(card));
        } catch (error) {
            dispatch(addCardFailure(error));
        }
    }
}

const updateCardFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === UPDATE_CARD) {
        try {
            let card = await api.cards.updateCard(action.payload.card);
            dispatch(updateCardSuccess(card));
        } catch (error) {
            dispatch(updateCardFailure(error));
        }
    }
}

const deleteCardFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === DELETE_CARD) {
        try {
            const cardId = action.payload.cardId;
            let result = await api.cards.deleteCardById(cardId);

            if (result) {
                dispatch(deleteCardSuccess(cardId));
            } else {
                dispatch(deleteCardFailure());
            }

        } catch (error) {
            dispatch(deleteCardFailure(error));
        }
    }
}


export default [
    loadCardsFlow,
    addCardFlow,
    updateCardFlow,
    deleteCardFlow
]