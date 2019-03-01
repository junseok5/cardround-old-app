import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}/v1.0`
})

// [POST]
export const localLogin = ({ email, password }) =>
    api.post(`/auth/login/local`, {
        email,
        password
    })

export const socialLogin = ({ provider, accessToken }) =>
    api.post(`/auth/login/${provider}`, {
        accessToken
    })
