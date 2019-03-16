import axios from "axios"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getInitialData = token =>
    api.get("/v1.0/initial", {
        headers: { "X-JWT": token }
    })
