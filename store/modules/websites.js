import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as WebsiteAPI from "../../api/website"
import { NUM_WEBSITE } from "../../constants/NumPerPage"

const INITIALIZE = "websites/INITIALIZE"
const GET_NORMAL_WEBSITES = "websites/GET_NORMAL_WEBSITES"
const GET_SEARCH_WEBSITES = "websites/GET_SEARCH_WEBSITES"
const GET_PREVIEW_WEBSITES = "websites/GET_PREVIEW_WEBSITES"

export const initialize = createAction(INITIALIZE)
export const getNormalWebsites = createAction(
    GET_NORMAL_WEBSITES,
    WebsiteAPI.getWebsiteList
)
export const getSearchWebsites = createAction(
    GET_SEARCH_WEBSITES,
    WebsiteAPI.getWebsiteList
)
export const getPreviewWebsites = createAction(
    GET_PREVIEW_WEBSITES,
    WebsiteAPI.getWebsiteSearchPreviewList
)

const initialWebsites = {
    websites: [],
    error: false,
    page: 1,
    end: false
}

const initialState = {
    normal: initialWebsites,
    search: initialWebsites,
    preview: initialWebsites
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => {
            const target = action.payload
            return produce(state, draft => {
                draft[target] = initialWebsites
            })
        },
        ...pender({
            type: GET_NORMAL_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < NUM_WEBSITE) {
                    return produce(state, draft => {
                        draft.normal.websites = state.normal.websites.concat(
                            websites
                        )
                        draft.normal.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.normal.websites = state.normal.websites.concat(
                            websites
                        )
                        draft.normal.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.normal.error = true
                })
            }
        }),
        ...pender({
            type: GET_SEARCH_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < NUM_WEBSITE) {
                    return produce(state, draft => {
                        draft.search.websites = state.search.websites.concat(
                            websites
                        )
                        draft.search.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.search.websites = state.search.websites.concat(
                            websites
                        )
                        draft.search.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.search.error = true
                })
            }
        }),
        ...pender({
            type: GET_PREVIEW_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data
                return produce(state, draft => {
                    draft.preview.websites = websites
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.preview.error = true
                })
            }
        })
    },
    initialState
)
