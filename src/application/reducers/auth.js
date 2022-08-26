import * as authActions from '../actions/auth';

const initialState = {
    isLoggedIn: false,
    isLoginLoading: false,
    loginErrorMessage: null,

    isRegistrationLoading: false,
    isRegistrationSuccess: false,
    registrationError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authActions.LOGIN:
            return {
                ...state,
                isLoggedIn: false,
                isLoginLoading: true,
                loginErrorMessage: null
            };
        case authActions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoginLoading: false,
                loginErrorMessage: null
            };
        case authActions.LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoginLoading: false,
                loginErrorMessage: action.payload.errorMessage
            };

        case authActions.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case authActions.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case authActions.LOGOUT_FAILURE:
            return {
                ...state,
                isLoggedIn: false
            };

        case authActions.RESTORE_LOGIN:
            return  {
                ...state,
                isLoginLoading: true,
            };
        case authActions.RESTORE_LOGIN_FINISHED:
            return  {
                ...state,
                isLoginLoading: false,
            };
        default:
            return state;
    }
}