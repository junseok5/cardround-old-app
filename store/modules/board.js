import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as BoardAPI from "../../api/board"

const INITIALIZE = "board/INITIALIZE"
const GET_BOARD = "board/GET_BOARD"

export const initialize = createAction(INITIALIZE)
export const getBoard = createAction(GET_BOARD, BoardAPI.getBoard)

const initialState = {
    board: {
        cards: []
    },
    error: false
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: GET_BOARD,
            onSuccess: (state, action) => {
                const { board } = action.payload.data
                return produce(state, draft => {
                    draft.board = board
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.error = true
                })
            }
        })
    },
    initialState
)
