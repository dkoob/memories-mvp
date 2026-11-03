import axios from "axios";

const AUTH_BASE_URL = "ignore";

const api = axios.create({
    baseURL: AUTH_BASE_URL,
    withCredentials: true
})

export async function register(userData) {
    const response = await api.post("/register", userData);

    return response.data;
}