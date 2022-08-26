import {appendUrlWithApiVersion} from "../http/http";
import axios from "axios";

export default {
    getDeckList: async () => {
        return await axios.get(appendUrlWithApiVersion("/decks"))
            .then(response => {
                return response.data
            });
    },

    addDeck: async (title, description) => {
        let body = {
            "name": "random",
            "description": description
        }

        return await axios.post(appendUrlWithApiVersion("/deck/add"), body)
            .then(response => {
                return response.data
            });
    },

    updateDeck: async (deck) => {
        let body = {
            "name": deck.title,
            "description": deck.description
        }

        return await axios.patch(appendUrlWithApiVersion("/deck/" + deck.id), body)
            .then(response => {
                return response.data
            });
    },

    deleteDeckById: async (deckId) => {
        return await axios.delete(appendUrlWithApiVersion("/deck/" + deckId))
            .then(response => {
                return response.status === 204;
            });
    },
}