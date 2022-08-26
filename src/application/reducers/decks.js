import * as deckActions from '../actions/decks';

const initialState = {
    deckList: {
        data: [],
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    deckAdd: {
        success: false,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    deckUpdate: {
        success: false,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    deckDelete: {
        success: false,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case deckActions.LOAD_DECKS:
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: [],
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                }
            };
        case deckActions.LOAD_DECKS_SUCCESS:
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: action.payload,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                }
            };
        case deckActions.LOAD_DECKS_FAILURE:
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: [],
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error // TODO: ellenőrizni h ez átjön-e
                    },
                }
            };
        case deckActions.ADD_DECK:
            return {
                ...state,
                deckAdd: {
                    ...state.deckAdd,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case deckActions.ADD_DECK_SUCCESS: {
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: [...state.deckList.data, action.payload.deck]
                },
                deckAdd: {
                    ...state.deckAdd,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        }
        case deckActions.ADD_DECK_FAILURE:
            return {
                ...state,
                deckAdd: {
                    ...state.deckAdd,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }
        case deckActions.UPDATE_DECK:
            return {
                ...state,
                deckUpdate: {
                    ...state.deckUpdate,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case deckActions.UPDATE_DECK_SUCCESS: {
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: state.deckList.data.map(
                        (item) => action.payload.deck.id === item.id ? action.payload.deck : item
                    ),
                },
                deckUpdate: {
                    ...state.deckUpdate,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        }
        case deckActions.UPDATE_DECK_FAILURE:
            return {
                ...state,
                deckUpdate: {
                    ...state.deckUpdate,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }

        case deckActions.DELETE_DECK:
            return {
                ...state,
                deckDelete: {
                    ...state.deckDelete,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case deckActions.DELETE_DECK_SUCCESS:
            return {
                ...state,
                deckList: {
                    ...state.deckList,
                    data: state.deckList.data.filter(item => item.id !== action.payload.deckId),
                },
                deckDelete: {
                    ...state.deckDelete,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case deckActions.DELETE_DECK_FAILURE:
            return {
                ...state,
                deckDelete: {
                    ...state.deckDelete,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }
        default:
            return state;
    }
}

export default reducer;