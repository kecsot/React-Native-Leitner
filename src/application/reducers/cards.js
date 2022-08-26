import * as cardActions from '../actions/cards';

const initialState = {

    cardList: {
        data: [],
        deckId: null,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    cardAdd: {
        success: false,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    cardUpdate: {
        success: false,
        loading: false,
        error: {
            hasError: false,
            errorMessage: ''
        },
    },

    cardDelete: {
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
        case cardActions.LOAD_CARDS_OF_DECK:
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    loading: true,
                    deckId: null,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.LOAD_CARDS_OF_DECK_SUCCESS:
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    data: action.payload.cardList,
                    loading: false,
                    deckId: action.payload.deckId,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.LOAD_CARDS_OF_DECK_FAILURE:
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    data: [],
                    loading: false,
                    deckId: null,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }

        case cardActions.ADD_CARD:
            return {
                ...state,
                cardAdd: {
                    ...state.cardAdd,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.ADD_CARD_SUCCESS: {
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    data: [...state.cardList.data, action.payload.card]
                },
                cardAdd: {
                    ...state.cardAdd,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        }
        case cardActions.ADD_CARD_FAILURE:
            return {
                ...state,
                cardAdd: {
                    ...state.cardAdd,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }
        case cardActions.UPDATE_CARD:
            return {
                ...state,
                cardUpdate: {
                    ...state.cardUpdate,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.UPDATE_CARD_SUCCESS: {
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    data: state.cardList.data.map(
                        (item) => action.payload.card.id === item.id ? action.payload.card : item
                    ),
                },
                cardUpdate: {
                    ...state.cardUpdate,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        }
        case cardActions.UPDATE_CARD_FAILURE:
            return {
                ...state,
                cardUpdate: {
                    ...state.cardUpdate,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }

        case cardActions.DELETE_CARD:
            return {
                ...state,
                cardDelete: {
                    ...state.cardDelete,
                    success: false,
                    loading: true,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.DELETE_CARD_SUCCESS:
            return {
                ...state,
                cardList: {
                    ...state.cardList,
                    data: state.cardList.data.filter(item => item.id !== action.payload.cardId),
                },
                cardDelete: {
                    ...state.cardDelete,
                    success: true,
                    loading: false,
                    error: {
                        hasError: false,
                        errorMessage: ''
                    },
                },
            }
        case cardActions.DELETE_CARD_FAILURE:
            return {
                ...state,
                cardDelete: {
                    ...state.cardDelete,
                    success: false,
                    loading: false,
                    error: {
                        hasError: true,
                        errorMessage: action.payload.error
                    },
                },
            }

            /*
                    case cardActions.LOAD_CARD_BY_ID:
            return {
                ...state,
                card: null,
                cardId: null,
                isCardLoading: true,
                cardError: null,
            }
        case cardActions.LOAD_CARD_BY_ID_SUCCESS:
            return {
                ...state,
                card: action.payload.card,
                cardId: action.payload.cardId,
                isCardLoading: false,
                cardError: null,
            }
        case cardActions.LOAD_CARD_BY_ID_FAILURE:
            return {
                ...state,
                card: null,
                cardId: null,
                isCardLoading: false,
                cardError: action.payload.error,
            }
             */
        default:
            return state;
    }
}

export default reducer;