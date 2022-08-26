import axios from "axios";
import api from "../api";
import SuccessTokenModel from "../api/oauth/SuccessTokenModel";
import * as tokenStorage from "../../application/localstorage/tokenStorage";

const setupAxiosInterceptors = (onUnauthenticated) => {
    axios.interceptors.request.use(
        async config => {
            const access_token = await tokenStorage.getToken()
            if (access_token) {
                config.headers = {
                    'Authorization': `Bearer ${access_token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            return config;
        },
        error => {
            return Promise.reject(error)
        }
    );

    axios.interceptors.response.use(
        response => response,
        async error => {
            const originalReq = error.config;

            if (error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
                originalReq._retry = true;
                const refresh_token = await tokenStorage.getRefreshToken()
                let result = await api.auth.refreshToken(refresh_token)

                if (result instanceof SuccessTokenModel) {
                    await tokenStorage.storeToken(result)
                } else {
                    onUnauthenticated();
                }
                return axios(originalReq)
            }

            return Promise.reject(error)
        }
    );
};

export default setupAxiosInterceptors;