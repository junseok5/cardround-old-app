import { createAction, handleActions } from "redux-actions"
import produce from "immer"

const INITIALIZE = "search/INITIALIZE"
const INITIALIZE_WEBSITE_SEARCH = "search/INITIALIZE_WEBSITE_SEARCH"
const INITIALIZE_BOARD_SEARCH = "search/INITIALIZE_BOARD_SEARCH"
const CHANGE_FORM = "search/CHANGE_FORM"
const CHANGE_KEYWORD = "search/CHANGE_KEYWORD"
const CHANGE_RECENT_KEYWORDS = "search/CHANGE_RECENT_KEYWORDS"

export const initialize = createAction(INITIALIZE)
export const initializeWebsiteSearch = createAction(INITIALIZE_WEBSITE_SEARCH)
export const initializeBoardSearch = createAction(INITIALIZE_BOARD_SEARCH)
export const changeForm = createAction(CHANGE_FORM)
export const changeKeyword = createAction(CHANGE_KEYWORD)
export const changeRecentKeywords = createAction(CHANGE_RECENT_KEYWORDS)

const initialState = {
    form: {
        website: "",
        board: ""
    },
    keyword: {
        website: "",
        board: ""
    },
    recentKeywords: {
        website: [],
        board: []
    }
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        [INITIALIZE_WEBSITE_SEARCH]: (state, action) => {
            return produce(state, draft => {
                draft.form.website = ""
                draft.keyword.website = ""
            })
        },
        [INITIALIZE_BOARD_SEARCH]: (state, action) => {
            return produce(state, draft => {
                draft.form.board = ""
                draft.keyword.board = ""
            })
        },
        [CHANGE_FORM]: (state, action) => {
            const { name, value } = action.payload
            return produce(state, draft => {
                draft.form[name] = value
            })
        },
        [CHANGE_KEYWORD]: (state, action) => {
            const { name, value } = action.payload
            return produce(state, draft => {
                draft.keyword[name] = value
            })
        },
        [CHANGE_RECENT_KEYWORDS]: (state, action) => {
            const { name, value } = action.payload
            return produce(state, draft => {
                draft.recentKeywords[name] = value
            })
        }
    },
    initialState
)
