import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}/v1.0`
})

// [GET]
export const socialLogin = ({ provider, accessToken }) =>
    api.post(`/auth/login/${provider}`, {
        accessToken
    })
