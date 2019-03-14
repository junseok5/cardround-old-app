import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as BoardAPI from "../../api/board"
import * as UserAPI from "../../api/user"
import { NUM_BOARD } from "../../constants/NumPerPage"

const INITIALIZE = "boards/INITIALIZE"
const CHANGE_FOLLOWING_STATUS = "boards/CHANGE_FOLLOWING_STATUS"
const GET_WEBSITE_BOARDS = "boards/GET_WEBSITE_BOARDS"
const GET_NORMAL_BOARDS = "boards/GET_NORMAL_BOARDS"
const GET_PREVIEW_BOARDS = "boards/GET_PREVIEW_BOARDS"
const GET_SEARCH_BOARDS = "boards/GET_SEARCH_BOARDS"
const GET_FOLLOWING_BOARDS = "boards/GET_FOLLOWING_BOARDS"
const GET_FOLLOWING_PREVIEW_BOARDS = "boards/GET_FOLLOWING_PREVIEW_BOARDS"

export const initialize = createAction(INITIALIZE)
export const changeFollowingStatus = createAction(CHANGE_FOLLOWING_STATUS)
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
export const getFollowingBoards = createAction(
    GET_FOLLOWING_BOARDS,
    UserAPI.getFollowingBoards
)
export const getFollowingPreviewBoards = createAction(
    GET_FOLLOWING_PREVIEW_BOARDS,
    UserAPI.getFollowingPreviewBoards
)

const initialBoards = {
    boards: [],
    error: false,
    page: 1,
    end: false
}

const initialState = {
    website: initialBoards,
    normal: initialBoards,
    search: initialBoards,
    preview: initialBoards,
    following: initialBoards,
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
        [CHANGE_FOLLOWING_STATUS]: (state, action) => {
            const { target, index, boardId, isFollowing } = action.payload
            const { following, normal } = state

            return produce(state, draft => {
                draft[target].boards[index].following = isFollowing

                // 보드 팔로우 시, 홈에 보드 추가
                if (target !== "following" && following.end && isFollowing) {
                    const exists = following.boards.some(followBoard => {
                        return followBoard._id === boardId
                    })

                    if (!exists) {
                        draft.following.boards.push({
                            ...state[target].boards[index],
                            following: true
                        })
                    }
                }

                if (isFollowing) {
                    draft.followingPreview.push({ board: boardId })
                } else {
                    state.followingPreview.forEach((item, key) => {
                        if (item.board === boardId) {
                            draft.followingPreview.splice(key, 1)
                        }
                    })
                }

                if (target === "following") {
                    if (normal.boards.length !== 0) {
                        normal.boards.forEach((board, key) => {
                            if (board._id === boardId) {
                                draft.normal.boards[key].following = isFollowing
                            }
                        })
                    }
                } else if (target === "normal") {
                    if (following.boards.length !== 0) {
                        following.boards.forEach((board, key) => {
                            if (board._id === boardId) {
                                draft.following.boards[
                                    key
                                ].following = isFollowing
                            }
                        })
                    }
                } else {
                    if (normal.boards.length !== 0) {
                        normal.boards.forEach((board, key) => {
                            if (board._id === boardId) {
                                draft.normal.boards[key].following = isFollowing
                            }
                        })
                    }

                    if (following.boards.length !== 0) {
                        following.boards.forEach((board, key) => {
                            if (board._id === boardId) {
                                draft.following.boards[
                                    key
                                ].following = isFollowing
                            }
                        })
                    }
                }
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
            type: GET_FOLLOWING_BOARDS,
            onSuccess: (state, action) => {
                const { followingBoards } = action.payload.data
                let boards = []

                if (followingBoards.length !== 0) {
                    followingBoards.forEach(followBoard => {
                        boards.push({
                            ...followBoard.board,
                            following: true
                        })
                    })
                }

                if (boards.length < NUM_BOARD) {
                    return produce(state, draft => {
                        draft.following.boards = state.following.boards.concat(
                            boards
                        )
                        draft.following.end = true
                    })
                } else {
                    return produce(state, draft => {
                        draft.following.boards = state.following.boards.concat(
                            boards
                        )
                        draft.following.page++
                    })
                }
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.following.error = true
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
        })
    },
    initialState
)
