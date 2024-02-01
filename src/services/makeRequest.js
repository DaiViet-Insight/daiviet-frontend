import axios from "axios";

const api = axios.create({
    baseURL: "http://20.236.83.109:3000",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
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