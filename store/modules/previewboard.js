import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as PreviewboardAPI from "../../api/previewboard"

const INITIALIZE = "previewboard/INITIALIZE"
const GET_PREVIEWBOARD_LIST = "previewboard/GET_PREVIEWBOARD_LIST"

export const initialize = createAction(INITIALIZE)
export const getPreviewboardList = createAction(
    GET_PREVIEWBOARD_LIST,
    PreviewboardAPI.getPreviewboardList
)

const initialState = {
    previewboards: [],
    listError: false
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: GET_PREVIEWBOARD_LIST,
            onSuccess: (state, action) => {
                const { previewboards } = action.payload.data
                return produce(state, draft => {
                    draft.previewboards = previewboards
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.listError = true
                })
            }
        })
    },
    initialState
)
