import axios from "axios"
import queryString from "query-string"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getBoardList = ({ page, category, keyword, websiteId }) =>
    api.get(
        `/v1.0/boards?${queryString.stringify({
            page,
            category,
            keyword,
            websiteId
        })}`
    )

export const getBoardSearchPreviewList = keyword =>
    api.get(
        `/v1.0/boards/search/preview?${queryString.stringify({
            keyword
        })}`
    )
