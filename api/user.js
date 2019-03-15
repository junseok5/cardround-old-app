import axios from "axios"
import queryString from "query-string"
import { API_URL } from "../constants/Base"

const api = axios.create({
    baseURL: `${API_URL}`
})

// [GET]
export const getMyInfo = token =>
    api.get(`/v1.0/users`, {
        headers: {
            "X-JWT": token
        }
    })

export const getFollowingBoards = ({ token, page }) =>
    api.get(`/v1.0/users/following?${queryString.stringify({ page })}`, {
        headers: {
            "X-JWT": token
        }
    })

export const getFollowingPreviewBoards = token =>
    api.get("/v1.0/users/following/preview", {
        headers: {
            "X-JWT": token
        }
    })

// [POST]
export const followBoard = ({ token, boardId }) =>
    api.post(
        `/v1.0/users/following/${boardId}`,
        {},
        {
            headers: {
                "X-JWT": token
            }
        }
    )

// [DELETE]
export const unfollowBoard = ({ token, boardId }) =>
    api.delete(`/v1.0/users/following/${boardId}`, {
        headers: {
            "X-JWT": token
        }
    })

// [PATCH]
export const updateFollowingBoardScore = ({ token, boardId }) =>
    api.patch(
        `/v1.0/users/following/${boardId}/score`,
        {},
        {
            headers: {
                "X-JWT": token
            }
        }
    )
