import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as CategoryAPI from "../../api/category"

const INITIALIZE = "category/INITIALIZE"
const GET_WEBSITE_CATEGORY_LIST = "category/GET_WEBSITE_CATEGORY_LIST"
const GET_BOARD_CATEGORY_LIST = "category/GET_BOARD_CATEGORY_LIST"
const CHANGE_SELECTED = "category/CHANGE_SELECTED"

export const initialize = createAction(INITIALIZE)
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
    selected: "인기"
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
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
                const categories = action.payload.data
                return produce(state, draft => {
                    draft.boardCategories = categories
                })
            }
        }),
        [CHANGE_SELECTED]: (state, action) => {
            const selected = action.payload
            console.log(selected)
            return produce(state, draft => {
                draft.selected = selected
            })
        }
    },
    initialState
)
