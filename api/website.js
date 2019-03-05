import axios from "axios"
import queryString from "query-string"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getWebsiteList = ({ page, category, keyword }) =>
    api.get(
        `/v1.0/websites?${queryString.stringify({
            page,
            category,
            keyword
        })}`
    )

export const getWebsitePreviewList = ({ page, keyword }) =>
    api.get(
        `/v1.0/websites/search/preview?${queryString.stringify({
            page,
            keyword
        })}`
    )
