export const LOAD_DECKS = 'load_decks';
export const LOAD_DECKS_SUCCESS = 'load_decks_success';
export const LOAD_DECKS_FAILURE = 'load_decks_failure';

export const ADD_DECK = 'add_deck';
export const ADD_DECK_SUCCESS = 'add_deck_success';
export const ADD_DECK_FAILURE = 'add_deck_failure';

export const UPDATE_DECK = 'update_deck';
export const UPDATE_DECK_SUCCESS = 'update_deck_success';
export const UPDATE_DECK_FAILURE = 'update_deck_failure';

export const DELETE_DECK = 'delete_deck';
export const DELETE_DECK_SUCCESS = 'delete_deck_success';
export const DELETE_DECK_FAILURE = 'delete_deck_failure';

export const loadDecks = () =>( {
    type: LOAD_DECKS,
});

export const loadDecksSuccess = decks => ({
    type: LOAD_DECKS_SUCCESS,
    payload: decks,
});
export const loadDecksFailure = (error) => ({
    type: LOAD_DECKS_FAILURE,
    payload: error
});


export const addDeck = (title,description) => ({
    type: ADD_DECK,
    payload: {
        title: title,
        description: description
    }
})
export const addDeckSuccess = deck => ({
    type: ADD_DECK_SUCCESS,
    payload: {
        deck: deck
    }
})
export const addDeckFailure = error => ({
    type: ADD_DECK_FAILURE,
    payload: {
        error: error
    }
})

export const updateDeck = deck => ({
    type: UPDATE_DECK,
    payload: {
        deck: deck
    }
})
export const updateDeckSuccess = deck => ({
    type: UPDATE_DECK_SUCCESS,
    payload: {
        deck: deck
    }
})
export const updateDeckFailure = error => ({
    type: UPDATE_DECK_FAILURE,
    payload: {
        error: error
    }
})

export const deleteDeckById = deckId => ({
    type: DELETE_DECK,
    payload: {
        deckId: deckId
    }
})
export const deleteDeckSuccess = deckId => ({
    type: DELETE_DECK_SUCCESS,
    payload: {
        deckId: deckId
    }
})
export const deleteDeckFailure = error => ({
    type: DELETE_DECK_FAILURE,
    payload: {
        error: error
    }
})