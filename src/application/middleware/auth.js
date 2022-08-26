import {
    LOGIN,
    LOGOUT,
    onLoginFailure,
    onLoginSuccess,
    onLogoutFailure,
    onLogoutSuccess,
    onRestoreLoginFinished,
    RESTORE_LOGIN,
} from "../actions/auth";
import SuccessTokenModel from "../../services/api/oauth/SuccessTokenModel";
import * as tokenStorage from "../localstorage/tokenStorage";
import EmptyTokenModel from "../../services/api/oauth/EmptyTokenModel";

const loginFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOGIN) {
        try {
            let payload = action.payload;
            let result = await api.auth.login(payload.email, payload.password);

            if (result instanceof SuccessTokenModel) {
                await tokenStorage.storeToken(result)
                dispatch(onLoginSuccess());
            } else {
                dispatch(onLoginFailure("Something went wrong..."));
            }
        } catch (error) {
            dispatch(onLoginFailure(error.toString()))
        }
    }
}

const logoutFlow = () => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOGOUT) {
        try {
            await tokenStorage.storeToken(new EmptyTokenModel())
            dispatch(onLogoutSuccess());
        } catch (error) {
            dispatch(onLogoutFailure());
        }
    }
}

const restoreLogin = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === RESTORE_LOGIN) {
        try {
            let tokenExpiredAfter = await tokenStorage.getTokenExpiredAfter()

            let isTokenExpired = Date.now() >= tokenExpiredAfter;
            if (isTokenExpired) {
                let tokenRefreshToken = await tokenStorage.getRefreshToken()
                let result = await api.auth.refreshToken(tokenRefreshToken);

                if (result instanceof SuccessTokenModel) {
                    await tokenStorage.storeToken(result)
                    dispatch(onLoginSuccess());
                } else {
                    dispatch(onLoginFailure("Failed to renew the token!"))
                }
            } else {
                dispatch(onLoginSuccess());
            }
            dispatch(onRestoreLoginFinished())
        } catch (error) {
            dispatch(onLoginFailure())
            dispatch(onRestoreLoginFinished())
        }
    }
}

export default [
    loginFlow,
    logoutFlow,
    restoreLogin
]