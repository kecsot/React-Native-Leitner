import {
    ADD_DECK,
    addDeckFailure,
    addDeckSuccess,
    DELETE_DECK,
    deleteDeckFailure,
    deleteDeckSuccess,
    LOAD_DECKS,
    loadDecksFailure,
    loadDecksSuccess,
    UPDATE_DECK,
    updateDeckFailure,
    updateDeckSuccess
} from "../actions/decks";
import DeckModel from "../../models/DeckModel";

const loadOwnDecksFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOAD_DECKS) {
        try {
            // TODO: Converter
            const decks = await api.decks.getDeckList();
            let deckModels = [];
            decks.forEach((item) => {
                let model = new DeckModel(item.id, item.name, item.description);
                model.created = item.created_at;
                model.updated = item.updated_at;
                deckModels.push(model);
            })

            dispatch(loadDecksSuccess(deckModels));
        } catch (error) {
            dispatch(loadDecksFailure(error.toString()));
        }
    }
}

const addDeckFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === ADD_DECK) {
        try {
            let deck = await api.decks.addDeck(action.payload.name, action.payload.description);

            dispatch(addDeckSuccess(deck));
        } catch (error) {
            dispatch(addDeckFailure(error.toString()));
        }
    }
}

const updateDeckFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === UPDATE_DECK) {
        try {
            let deck = await api.decks.updateDeck(action.payload.deck);
            dispatch(updateDeckSuccess(deck));
        } catch (error) {
            dispatch(updateDeckFailure(error));
        }
    }
}

const deleteDeckFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === DELETE_DECK) {
        try {
            const deckId = action.payload.deckId;
            let result = await api.decks.deleteDeckById(action.payload.deckId);
            if (result) {
                dispatch(deleteDeckSuccess(deckId));
            } else {
                dispatch(deleteDeckFailure());
            }
        } catch (error) {
            dispatch(deleteDeckFailure(error));
        }
    }
}

export default [
    loadOwnDecksFlow,
    addDeckFlow,
    updateDeckFlow,
    deleteDeckFlow
]