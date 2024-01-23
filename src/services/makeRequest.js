import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
});

export function makeRequest(url, options = {}) {
    return api(url, options)
        .then(({ data }) => data)
        .catch((err) => {
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const { status, data } = err.response;
                return Promise.reject(
                    new Error(`${status} ${data.msg || data.message}`)
                );
            } else if (err.request) {
                // The request was made but no response was received
                return Promise.reject(new Error("No response received"));
            } else {
                // Something happened in setting up the request that triggered an Error
                return Promise.reject(
                    new Error(`Error in request setup: ${err.message}`)
                );
            }
        });
}