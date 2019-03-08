import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as WebsiteAPI from "../../api/website"
import * as PreviewboardAPI from "../../api/previewboard"
import { NUM_WEBSITE, NUM_PREVIEWBOARD } from "../../constants/NumPerPage"

const INITIALIZE = "listing/INITIALIZE"
const INITIALIZE_NORMAL_WEBSITES = "listing/INITIALIZE_NORMAL_WEBSITES"
const INITIALIZE_SEARCH_WEBSITES = "listing/INITIALIZE_SEARCH_WEBSITES"
const INITIALIZE_PREVIEW_WEBSITES = "listing/INITIALIZE_PREVIEW_WEBSITES"
const INITIALIZE_WEBSITE_PREVIEWBOARDS =
    "listing/INITIALIZE_WEBSITE_PREVIEWBOARDS"
const INITIALIZE_NORMAL_PREVIEWBOARDS =
    "listing/INITIALIZE_NORMAL_PREVIEWBOARDS"
const INITIALIZE_PREVIEW_PREVIEWBOARDS =
    "listing/INITIALIZE_PREVIEW_PREVIEWBOARDS"
const INITIALIZE_SEARCH_PREVIEWBOARDS =
    "listing/INITIALIZE_SEARCH_PREVIEWBOARDS"
const GET_NORMAL_WEBSITES = "listing/GET_NORMAL_WEBSITES"
const GET_SEARCH_WEBSITES = "listing/GET_SEARCH_WEBSITES"
const GET_PREVIEW_WEBSITES = "listing/GET_PREVIEW_WEBSITES"
const GET_WEBSITE_PREVIEWBOARDS = "listing/GET_WEBSITE_PREVIEWBOARDS"
const GET_NORMAL_PREVIEWBOARDS = "listing/GET_NORMAL_PREVIEWBOARDS"
const GET_PREVIEW_PREVIEWBOARDS = "listing/GET_PREVIEW_PREVIEWBOARDS"
const GET_SEARCH_PREVIEWBOARDS = "listing/GET_SEARCH_PREVIEWBOARDS"

// Initialize Action
export const initialize = createAction(INITIALIZE)
export const initializeNormalWebsites = createAction(INITIALIZE_NORMAL_WEBSITES)
export const initializeSearchWebsites = createAction(INITIALIZE_SEARCH_WEBSITES)
export const initializePreviewWebsites = createAction(
    INITIALIZE_PREVIEW_WEBSITES
)
export const initializeWebsitePreviewboards = createAction(
    INITIALIZE_WEBSITE_PREVIEWBOARDS
)
export const initializeNormalPreviewboards = createAction(
    INITIALIZE_NORMAL_PREVIEWBOARDS
)
export const initializePreviewPreviewboards = createAction(
    INITIALIZE_PREVIEW_PREVIEWBOARDS
)
export const initializeSearchPreviewboards = createAction(
    INITIALIZE_SEARCH_PREVIEWBOARDS
)
// Website Action
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
    WebsiteAPI.getWebsitePreviewList
)
// Previewboard Action
export const getWebsitePreviewboards = createAction(
    GET_WEBSITE_PREVIEWBOARDS,
    PreviewboardAPI.getPreviewboardList
)
export const getNormalPreviewboards = createAction(
    GET_NORMAL_PREVIEWBOARDS,
    PreviewboardAPI.getPreviewboardList
)
export const getPreviewPreviewboards = createAction(
    GET_PREVIEW_PREVIEWBOARDS,
    PreviewboardAPI.getPreviewPreviewboardList
)
export const getSearchPreviewboards = createAction(
    GET_SEARCH_PREVIEWBOARDS,
    PreviewboardAPI.getPreviewboardList
)

const initialWebsites = {
    websites: [],
    error: false,
    page: 1,
    end: false
}

const initialPreviewboards = {
    previewboards: [],
    error: false,
    page: 1,
    end: false
}

const initialState = {
    website: {
        normal: initialWebsites,
        search: initialWebsites,
        preview: {
            websites: [],
            error: false
        }
    },
    previewboard: {
        following: initialPreviewboards,
        website: initialPreviewboards,
        normal: initialPreviewboards,
        search: initialPreviewboards,
        preview: {
            previewboards: [],
            error: false
        }
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
        [INITIALIZE_PREVIEW_WEBSITES]: (state, action) => {
            return produce(state, draft => {
                draft.website.preview.websites = []
                draft.website.preview.error = false
            })
        },
        [INITIALIZE_WEBSITE_PREVIEWBOARDS]: (state, action) => {
            return produce(state, draft => {
                draft.previewboard.website = initialPreviewboards
            })
        },
        [INITIALIZE_NORMAL_PREVIEWBOARDS]: (state, action) => {
            return produce(state, draft => {
                draft.previewboard.normal = initialPreviewboards
            })
        },
        [INITIALIZE_PREVIEW_PREVIEWBOARDS]: (state, action) => {
            return produce(state, draft => {
                draft.previewboard.preview.previewboards = []
                draft.previewboard.preview.error = false
            })
        },
        [INITIALIZE_SEARCH_PREVIEWBOARDS]: (state, action) => {
            return produce(state, draft => {
                draft.previewboard.search = initialPreviewboards
            })
        },
        ...pender({
            type: GET_NORMAL_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data

                if (websites.length < NUM_WEBSITE) {
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

                if (websites.length < NUM_WEBSITE) {
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
        }),
        ...pender({
            type: GET_PREVIEW_WEBSITES,
            onSuccess: (state, action) => {
                const { websites } = action.payload.data
                return produce(state, draft => {
                    draft.website.preview.websites = websites
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.website.preview.error = true
                })
            }
        }),
        ...pender({
            type: GET_WEBSITE_PREVIEWBOARDS,
            onSuccess: (state, action) => {
                const { previewboards } = action.payload.data

                if (previewboards.length < NUM_PREVIEWBOARD) {
                    return produce(state, draft => {
                        draft.previewboard.website.previewboards = state.previewboard.website.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.website.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.previewboard.website.previewboards = state.previewboard.website.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.website.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.previewboard.website.error = true
                })
            }
        }),
        ...pender({
            type: GET_NORMAL_PREVIEWBOARDS,
            onSuccess: (state, action) => {
                const { previewboards } = action.payload.data

                if (previewboards.length < NUM_PREVIEWBOARD) {
                    return produce(state, draft => {
                        draft.previewboard.normal.previewboards = state.previewboard.normal.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.normal.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.previewboard.normal.previewboards = state.previewboard.normal.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.normal.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.previewboard.normal.error = true
                })
            }
        }),
        ...pender({
            type: GET_PREVIEW_PREVIEWBOARDS,
            onSuccess: (state, action) => {
                const { previewboards } = action.payload.data
                return produce(state, draft => {
                    draft.previewboard.preview.previewboards = previewboards
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.previewboard.preview.error = true
                })
            }
        }),
        ...pender({
            type: GET_SEARCH_PREVIEWBOARDS,
            onSuccess: (state, action) => {
                const { previewboards } = action.payload.data

                if (previewboards.length < NUM_PREVIEWBOARD) {
                    return produce(state, draft => {
                        draft.previewboard.search.previewboards = state.previewboard.search.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.search.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.previewboard.search.previewboards = state.previewboard.search.previewboards.concat(
                            previewboards
                        )
                        draft.previewboard.search.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.previewboard.search.error = true
                })
            }
        })
    },
    initialState
)
