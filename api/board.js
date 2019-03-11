import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getBoard = id => api.get(`/v1.0/boards/${id}`)
