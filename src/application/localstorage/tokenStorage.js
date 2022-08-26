import * as SecureStore from "expo-secure-store";
import SuccessTokenModel from "../../services/api/oauth/SuccessTokenModel";

export const  storeToken = async (tokenModel) => {
    if (tokenModel instanceof SuccessTokenModel) {
        console.log(tokenModel)
        await SecureStore.setItemAsync('tokenRequestedAt', tokenModel.requested_at.toString())
        await SecureStore.setItemAsync('tokenExpiredAfter', tokenModel.expired_after.toString())
        await SecureStore.setItemAsync('tokenExpiresIn', tokenModel.expires_in.toString())
        await SecureStore.setItemAsync('token', tokenModel.access_token.toString())
        await SecureStore.setItemAsync('tokenRefreshToken', tokenModel.refresh_token.toString())
    } else {
        await SecureStore.setItemAsync('tokenRequestedAt', "0")
        await SecureStore.setItemAsync('tokenExpiredAfter', "0")
        await SecureStore.setItemAsync('tokenExpiresIn', "1")
        await SecureStore.setItemAsync('token', "")
        await SecureStore.setItemAsync('tokenRefreshToken', "")
    }
}

export const getRefreshToken = async () => {
    return SecureStore.getItemAsync('tokenRefreshToken');
}

export const getToken = async () => {
    return SecureStore.getItemAsync('token');
}

export const getTokenExpiredAfter = async () => {
    return SecureStore.getItemAsync('tokenExpiredAfter');
}