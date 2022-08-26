export const LOGIN = 'login';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILURE = 'login_failure';

export const LOGOUT = 'logout';
export const LOGOUT_SUCCESS = 'logout_success';
export const LOGOUT_FAILURE = 'logout_failure';

export const RESTORE_LOGIN = 'restore_login';
export const RESTORE_LOGIN_FINISHED = 'restore_login_finished';

export const login = (email, password) => ({
    type: LOGIN,
    payload: {
        email: email,
        password: password
    }
})
export const onLoginSuccess = () => ({type: LOGIN_SUCCESS})
export const onLoginFailure = (errorMessage) => ({
    type: LOGIN_FAILURE,
    payload: {
        errorMessage: errorMessage
    }
})

export const logout = () => ({type: LOGOUT})
export const onLogoutSuccess = () => ({type: LOGOUT_SUCCESS})
export const onLogoutFailure = () => ({type: LOGOUT_FAILURE})

export const restoreLogin = () => ({type: RESTORE_LOGIN})
export const onRestoreLoginFinished = () => ({type: RESTORE_LOGIN_FINISHED})