import {BASE_URL, http} from "../http/http";
import oauth from "axios-oauth-client";
import SuccessTokenModel from "./oauth/SuccessTokenModel";

export default {

    /**
     * @param username
     * @param password
     * @throws
     */
    login: async (username, password) => {
        let requested_at_ms = Date.now();

        let result = await oauth.client(http, {
            url: BASE_URL + '/oauth/token',
            client_id: '2',
            client_secret: '6Lq8c4K2i7J9eNeaQpfVvUrfoLvZx9AkfTNTurra',

            grant_type: 'password',
            username: username,
            password: password
        })();

        let expires_in_ms = result.expires_in * 1000;
        let expired_after = requested_at_ms + expires_in_ms;

        return new SuccessTokenModel(
            requested_at_ms.toString(),
            expired_after.toString(),
            result.expires_in.toString(),
            result.access_token,
            result.refresh_token
        );
    },

    refreshToken: async (refreshToken) => {
        let requested_at_ms = Date.now();

        let result = await oauth.client(http, {
            url: BASE_URL + '/oauth/token',
            client_id: '7d6174b3-6a9f-44f2-a358-5836cdd72a2a',
            client_secret: 'pass',

            grant_type: 'refresh_token',
            refresh_token: refreshToken
        })();

        let expires_in_ms = result.expires_in * 1000;
        let expired_after = requested_at_ms + expires_in_ms;

        return new SuccessTokenModel(
            requested_at_ms.toString(),
            expired_after.toString(),
            result.expires_in.toString(),
            result.access_token,
            result.refresh_token
        );
    },

}