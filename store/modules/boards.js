import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as BoardAPI from "../../api/board"
import * as UserAPI from "../../api/user"
import { NUM_BOARD } from "../../constants/NumPerPage"

const INITIALIZE = "boards/INITIALIZE"
const GET_WEBSITE_BOARDS = "boards/GET_WEBSITE_BOARDS"
const GET_NORMAL_BOARDS = "boards/GET_NORMAL_BOARDS"
const GET_PREVIEW_BOARDS = "boards/GET_PREVIEW_BOARDS"
const GET_SEARCH_BOARDS = "boards/GET_SEARCH_BOARDS"
const GET_FOLLOWING_PREVIEW_BOARDS = "boards/GET_FOLLOWING_PREVIEW_BOARDS"
const CHANGE_FOLLOWING_STATUS = "boards/CHANGE_FOLLOWING_STATUS"

export const initialize = createAction(INITIALIZE)
export const getWebsiteBoards = createAction(
    GET_WEBSITE_BOARDS,
    BoardAPI.getBoardList
)
export const getNormalBoards = createAction(
    GET_NORMAL_BOARDS,
    BoardAPI.getBoardList
)
export const getPreviewBoards = createAction(
    GET_PREVIEW_BOARDS,
    BoardAPI.getBoardSearchPreviewList
)
export const getSearchBoards = createAction(
    GET_SEARCH_BOARDS,
    BoardAPI.getBoardList
)
export const getFollowingPreviewBoards = createAction(
    GET_FOLLOWING_PREVIEW_BOARDS,
    UserAPI.getFollowingPreviewBoards
)
export const changeFollowingStatus = createAction(CHANGE_FOLLOWING_STATUS)

const initialBoards = {
    boards: [],
    error: false,
    page: 1,
    end: false
}

const initialState = {
    following: initialBoards,
    website: initialBoards,
    normal: initialBoards,
    search: initialBoards,
    preview: initialBoards,
    followingPreview: []
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => {
            const target = action.payload
            return produce(state, draft => {
                draft[target] = initialBoards
            })
        },
        ...pender({
            type: GET_WEBSITE_BOARDS,
            onSuccess: (state, action) => {
                const { boards } = action.payload.data
                const { followingPreview } = state

                if (boards.length !== 0 && followingPreview.length !== 0) {
                    boards.forEach(board => {
                        followingPreview.forEach(preview => {
                            if (board._id === preview.board) {
                                board.following = true
                            }
                        })
                    })
                }

                if (boards.length < NUM_BOARD) {
                    return produce(state, draft => {
                        draft.website.boards = state.website.boards.concat(
                            boards
                        )
                        draft.website.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.website.boards = state.website.boards.concat(
                            boards
                        )
                        draft.website.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.website.error = true
                })
            }
        }),
        ...pender({
            type: GET_NORMAL_BOARDS,
            onSuccess: (state, action) => {
                const { boards } = action.payload.data
                const { followingPreview } = state

                if (boards.length !== 0 && followingPreview.length !== 0) {
                    boards.forEach(board => {
                        followingPreview.forEach(preview => {
                            if (board._id === preview.board) {
                                board.following = true
                            }
                        })
                    })
                }

                if (boards.length < NUM_BOARD) {
                    return produce(state, draft => {
                        draft.normal.boards = state.normal.boards.concat(boards)
                        draft.normal.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.normal.boards = state.normal.boards.concat(boards)
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
            type: GET_PREVIEW_BOARDS,
            onSuccess: (state, action) => {
                const { boards } = action.payload.data
                return produce(state, draft => {
                    draft.preview.boards = boards
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.preview.error = true
                })
            }
        }),
        ...pender({
            type: GET_SEARCH_BOARDS,
            onSuccess: (state, action) => {
                const { boards } = action.payload.data
                const { followingPreview } = state

                if (boards.length !== 0 && followingPreview.length !== 0) {
                    boards.forEach(board => {
                        followingPreview.forEach(preview => {
                            if (board._id === preview.board) {
                                board.following = true
                            }
                        })
                    })
                }

                if (boards.length < NUM_BOARD) {
                    return produce(state, draft => {
                        draft.search.boards = state.search.boards.concat(boards)
                        draft.search.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.search.boards = state.search.boards.concat(boards)
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
            type: GET_FOLLOWING_PREVIEW_BOARDS,
            onSuccess: (state, action) => {
                const { followingBoards } = action.payload.data
                return produce(state, draft => {
                    draft.followingPreview = followingBoards
                })
            }
        }),
        [CHANGE_FOLLOWING_STATUS]: (state, action) => {
            const status = action.payload
            return produce(state, draft => {
                
            })
        }
    },
    initialState
)
