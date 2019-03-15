import { createAction, handleActions } from "redux-actions"
// import produce from "immer"
// import { pender } from "redux-pender"
import * as UserAPI from "../../api/user"

const INITIALIZE = "follow/INITIALIZE"
const FOLLOW_BOARD = "follow/FOLLOW_BOARD"
const UNFOLLOW_BOARD = "follow/UNFOLLOW_BOARD"
const UPDATE_FOLLOWING_BOARD_SCORE = "follow/UPDATE_FOLLOWING_BOARD_SCORE"

export const initialize = createAction(INITIALIZE)
export const followBoard = createAction(FOLLOW_BOARD, UserAPI.followBoard)
export const unfollowBoard = createAction(UNFOLLOW_BOARD, UserAPI.unfollowBoard)
export const updateFollowingBoardScore = createAction(
    UPDATE_FOLLOWING_BOARD_SCORE,
    UserAPI.updateFollowingBoardScore
)

const initialState = {}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState
    },
    initialState
)
