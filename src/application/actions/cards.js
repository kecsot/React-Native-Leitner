export const LOAD_CARDS_OF_DECK = 'load_cards_of_deck';
export const LOAD_CARDS_OF_DECK_SUCCESS = 'load_cards_of_deck_success';
export const LOAD_CARDS_OF_DECK_FAILURE = 'load_cards_of_deck_failure';

export const ADD_CARD = 'add_card';
export const ADD_CARD_SUCCESS = 'add_card_success';
export const ADD_CARD_FAILURE = 'add_card_failure';

export const UPDATE_CARD = 'update_card';
export const UPDATE_CARD_SUCCESS = 'update_card_success';
export const UPDATE_CARD_FAILURE = 'update_card_failure';

export const DELETE_CARD = 'delete_card';
export const DELETE_CARD_SUCCESS = 'delete_card_success';
export const DELETE_CARD_FAILURE = 'delete_card_failure';

export const loadCardListOfDeck = deckId => ({
    type: LOAD_CARDS_OF_DECK,
    payload: {
        deckId: deckId
    }
});
export const loadCardsSuccess = (cards, deckId) => ({
    type: LOAD_CARDS_OF_DECK_SUCCESS,
    payload: {
        cardList: cards,
        deckId: deckId
    },
});
export const loadCardsFailure = () => ({
    type: LOAD_CARDS_OF_DECK_FAILURE,
    payload: {
        error: error
    }
});

export const addCard = card => ({
    type: ADD_CARD,
    payload: {
        card: card
    }
})
export const addCardSuccess = card => ({
    type: ADD_CARD_SUCCESS,
    payload: {
        card: card
    }
})
export const addCardFailure = error => ({
    type: ADD_CARD_FAILURE,
    payload: {
        error: error
    }
})

export const updateCard = card => ({
    type: UPDATE_CARD,
    payload: {
        card: card
    }
})
export const updateCardSuccess = card => ({
    type: UPDATE_CARD_SUCCESS,
    payload: {
        card: card
    }
})
export const updateCardFailure = error => ({
    type: UPDATE_CARD_FAILURE,
    payload: {
        error: error
    }
})

export const deleteCardById = cardId => ({
    type: DELETE_CARD,
    payload: {
        cardId: cardId
    }
})
export const deleteCardSuccess = cardId => ({
    type: DELETE_CARD_SUCCESS,
    payload: {
        cardId: cardId
    }
})
export const deleteCardFailure = error => ({
    type: DELETE_CARD_FAILURE,
    payload: {
        error: error
    }
})