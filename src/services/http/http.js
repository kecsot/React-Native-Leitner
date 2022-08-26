import axios from "axios";

const myHttp = axios.create();

export const BASE_URL = "http://localhost:8001";

export const appendUrlWithApiVersion = (path) => {
    return BASE_URL + "/api/v1" + path;
}

export const http = myHttp;