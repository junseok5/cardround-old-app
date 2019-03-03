import axios from "axios"
import queryString from "query-string"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getPreviewboardList = ({ page, category, keyword, websiteId }) =>
    api.get(
        `/v1.0/previewboards/websites/${websiteId}?${queryString.stringify({
            page,
            category,
            keyword
        })}`
    )
