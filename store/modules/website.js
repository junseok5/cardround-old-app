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
    page: 1,
    end: false
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: GET_WEBSITE_LIST,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < 20) {
                    return produce(state, draft => {
                        draft.websites = state.websites.concat(websites)
                        draft.end = true
                        draft.loading = false
                    })
                } else {
                    return produce(state, draft => {
                        draft.websites = state.websites.concat(websites)
                        draft.page++
                        draft.loading = false
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.listError = true
                    draft.loading = false
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
