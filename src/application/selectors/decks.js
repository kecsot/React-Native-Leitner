export const getDeckList = state => state.decks.deckList.data;
export const isDeckListLoading = state => state.decks.deckList.loading;
export const isDeckListErrorHappened = state => state.decks.deckList.error.hasError;
export const deckListErrorMessage = state => state.decks.deckList.error.errorMessage;

export const isDeckAddSuccess = state => state.decks.deckAdd.success;
export const isDeckAddLoading = state => state.decks.deckAdd.loading;
export const isDeckAddErrorHappened = state => state.decks.deckAdd.error.hasError;
export const deckAddErrorMessage = state => state.decks.deckAdd.error.errorMessage;

export const isDeckUpdateSuccess = state => state.decks.deckUpdate.success;
export const isDeckUpdateLoading = state => state.decks.deckUpdate.loading;
export const isDeckUpdateErrorHappened = state => state.decks.deckUpdate.error.hasError;
export const deckUpdateErrorMessage = state => state.decks.deckUpdate.error.errorMessage;

export const isDeckDeleteSuccess = state => state.decks.deckDelete.success;
export const isDeckDeleteLoading = state => state.decks.deckDelete.loading;
export const isDeckDeleteErrorHappened = state => state.decks.deckDelete.error.hasError;
export const deckDeleteErrorMessage = state => state.decks.deckDelete.error.errorMessage;