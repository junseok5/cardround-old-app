import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"

const INITIALIZE = "website/INITIALIZE"

export const initialize = createAction(INITIALIZE)

const initialState = {
    
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState
    },
    initialState
)
