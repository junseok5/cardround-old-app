import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as CategoryAPI from "../../api/category"

const INITIALIZE = "category/INITIALIZE"
const RECEIVE_INITIAL_DATA = "category/RECEIVE_INITIAL_DATA"
const INITIALIZE_WEBSITE_CATEGORIES = "category/INITIALIZE_WEBSITE_CATEGORIES"
const INITIALIZE_BOARD_CATEGORIES = "category/INITIALIZE_BOARD_CATEGORIES"
const GET_WEBSITE_CATEGORY_LIST = "category/GET_WEBSITE_CATEGORY_LIST"
const GET_BOARD_CATEGORY_LIST = "category/GET_BOARD_CATEGORY_LIST"
const CHANGE_SELECTED = "category/CHANGE_SELECTED"

export const initialize = createAction(INITIALIZE)
export const receiveInitialData = createAction(RECEIVE_INITIAL_DATA)
export const initializeWebsiteCategories = createAction(
    INITIALIZE_WEBSITE_CATEGORIES
)
export const initializeBoardCategories = createAction(
    INITIALIZE_BOARD_CATEGORIES
)
export const getWebsiteCategoryList = createAction(
    GET_WEBSITE_CATEGORY_LIST,
    CategoryAPI.getCategoryList
)
export const getBoardCategoryList = createAction(
    GET_BOARD_CATEGORY_LIST,
    CategoryAPI.getCategoryList
)
export const changeSelected = createAction(CHANGE_SELECTED)

const initialState = {
    websiteCategories: [],
    boardCategories: [],
    selected: {
        website: "인기",
        board: "인기"
    }
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        [RECEIVE_INITIAL_DATA]: (state, action) => {
            const { boardCategories, websiteCategories } = action.payload

            return produce(state, draft => {
                draft.boardCategories = boardCategories
                draft.websiteCategories = websiteCategories
            })
        },
        [INITIALIZE_WEBSITE_CATEGORIES]: (state, action) => {
            return produce(state, draft => {
                draft.websiteCategories = []
            })
        },
        [INITIALIZE_BOARD_CATEGORIES]: (state, action) => {
            return produce(state, draft => {
                draft.boardCategories = []
            })
        },
        ...pender({
            type: GET_WEBSITE_CATEGORY_LIST,
            onSuccess: (state, action) => {
                const { categories } = action.payload.data
                return produce(state, draft => {
                    draft.websiteCategories = categories
                })
            }
        }),
        ...pender({
            type: GET_BOARD_CATEGORY_LIST,
            onSuccess: (state, action) => {
                const { categories } = action.payload.data

                return produce(state, draft => {
                    draft.boardCategories = categories
                })
            }
        }),
        [CHANGE_SELECTED]: (state, action) => {
            const { name, value } = action.payload

            return produce(state, draft => {
                draft.selected[name] = value
            })
        }
    },
    initialState
)
