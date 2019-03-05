import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as WebsiteAPI from "../../api/website"

const INITIALIZE = "listing/INITIALIZE"
const INITIALIZE_NORMAL_WEBSITES = "listing/INITIALIZE_NORMAL_WEBSITES"
const INITIALIZE_SEARCH_WEBSITES = "listing/INITIALIZE_SEARCH_WEBSITES"
const GET_NORMAL_WEBSITES = "listing/GET_NORMAL_WEBSITES"
const GET_SEARCH_WEBSITES = "listing/GET_SEARCH_WEBSITES"

export const initialize = createAction(INITIALIZE)
export const initializeNormalWebsites = createAction(INITIALIZE_NORMAL_WEBSITES)
export const initializeSearchWebsites = createAction(INITIALIZE_SEARCH_WEBSITES)
export const getNormalWebsites = createAction(
    GET_NORMAL_WEBSITES,
    WebsiteAPI.getWebsiteList
)
export const getSearchWebsites = createAction(
    GET_SEARCH_WEBSITES,
    WebsiteAPI.getWebsiteList
)

const initialWebsites = {
    websites: [],
    error: false,
    page: 1,
    end: false
}

const initialState = {
    website: {
        normal: initialWebsites,
        search: initialWebsites
    }
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        [INITIALIZE_NORMAL_WEBSITES]: (state, action) => {
            return produce(state, draft => {
                draft.website.normal = initialWebsites
            })
        },
        [INITIALIZE_SEARCH_WEBSITES]: (state, action) => {
            return produce(state, draft => {
                draft.website.search = initialWebsites
            })
        },
        ...pender({
            type: GET_NORMAL_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < 20) {
                    return produce(state, draft => {
                        draft.website.normal.websites = state.website.normal.websites.concat(
                            websites
                        )
                        draft.website.normal.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.website.normal.websites = state.website.normal.websites.concat(
                            websites
                        )
                        draft.website.normal.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.website.normal.error = true
                })
            }
        }),
        ...pender({
            type: GET_SEARCH_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < 20) {
                    return produce(state, draft => {
                        draft.website.search.websites = state.website.search.websites.concat(
                            websites
                        )
                        draft.website.search.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.website.search.websites = state.website.search.websites.concat(
                            websites
                        )
                        draft.website.search.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.website.search.error = true
                })
            }
        })
    },
    initialState
)
