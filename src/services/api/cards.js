import axios from "axios";
import {appendUrlWithApiVersion} from "../http/http";

export default {
    getCardListByDeckId: async (deckId) => {
        return await axios.get(appendUrlWithApiVersion("/deck/" + deckId + "/cards"))
            .then(response => {
                return response.data
            });
    },

    addCardToDeck: async (card) => {
        let data = {
            "front_text": card.frontText,
            "back_text": card.backText,
        }

        return await axios.post(appendUrlWithApiVersion("/deck/" + card.deckId + "/card/add"), data)
            .then(response => {
                return response.data
            });
    },

    updateCard: async (card) => {
        let data = {
            "front_text": card.frontText,
            "back_text": card.backText,
        }

        return await axios.patch(appendUrlWithApiVersion("card/" + card.id), data)
            .then(response => {
                return response.data
            });
    },

    deleteCardById: async (cardId) => {
        return await axios.delete(appendUrlWithApiVersion("card/" + cardId))
            .then(response => {
                return response.status === 204;
            });
    },

}