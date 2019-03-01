import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getMyInfo = () => api.get(`/v1.0/users`)
