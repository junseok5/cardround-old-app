import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as WebsiteAPI from "../../api/website"

const INITIALIZE = "website/INITIALIZE"
const GET_WEBSITE_LIST = "website/GET_WEBSITE_LIST"
const CHANGE_PAGE = "website/CHANGE_PAGE"

export const initialize = createAction(INITIALIZE)
export const getWebsiteList = createAction(
    GET_WEBSITE_LIST,
    WebsiteAPI.getWebsiteList
)
export const changePage = createAction(CHANGE_PAGE)

const initialState = {
    websites: [],
    listError: false,
    page: 1
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: GET_WEBSITE_LIST,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data
                return produce(state, draft => {
                    draft.websites = websites
                    draft.page++
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.listError = true
                })
            }
        }),
        [CHANGE_PAGE]: (state, action) => {
            const page = action.payload
            return produce(state, draft => {
                draft.page = page
            })
        }
    },
    initialState
)
