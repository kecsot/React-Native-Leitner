export const getCardList = state => state.cards.cardList.data;
export const isCardListLoading = state => state.cards.cardList.loading;
export const isCardListErrorHappened = state => state.cards.cardList.error.hasError;
export const cardListErrorMessage = state => state.cards.cardList.error.errorMessage;

export const isCardAddSuccess = state => state.cards.cardAdd.success;
export const isCardAddLoading = state => state.cards.cardAdd.loading;
export const isCardAddErrorHappened = state => state.cards.cardAdd.error.hasError;
export const cardAddErrorMessage = state => state.cards.cardAdd.error.errorMessage;

export const isCardUpdateSuccess = state => state.cards.cardUpdate.success;
export const isCardUpdateLoading = state => state.cards.cardUpdate.loading;
export const isCardUpdateErrorHappened = state => state.cards.cardUpdate.error.hasError;
export const cardUpdateErrorMessage = state => state.cards.cardUpdate.error.errorMessage;

export const isCardDeleteSuccess = state => state.cards.cardDelete.success;
export const isCardDeleteLoading = state => state.cards.cardDelete.loading;
export const isCardDeleteErrorHappened = state => state.cards.cardDelete.error.hasError;
export const cardDeleteErrorMessage = state => state.cards.cardDelete.error.errorMessage;