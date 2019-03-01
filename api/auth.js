import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [POST]
export const localLogin = ({ email, password }) =>
    api.post(`/v1.0/auth/login/local`, {
        email,
        password
    })

export const socialLogin = ({ provider, accessToken }) =>
    api.post(`/v1.0/auth/login/${provider}`, {
        accessToken
    })
