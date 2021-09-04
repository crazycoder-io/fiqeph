import axios from "axios";
import {UNSPLASH_BASE_URL, UNSPLASH_API_KEY} from "@env";

// Set config defaults when creating the instance

const API_INSTANCE = axios.create({
    baseURL: UNSPLASH_BASE_URL,
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
});

// Add a request interceptor
API_INSTANCE.interceptors.request.use(
    config => {
        // Do something before request is sent
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        config.headers["Authorization"] = "Client-ID " + UNSPLASH_API_KEY;
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
API_INSTANCE.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default API_INSTANCE;
