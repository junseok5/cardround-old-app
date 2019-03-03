import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as UserAPI from "../../api/user"

const INITIALIZE = "user/INITIALIZE"
const GET_MY_INFO = "user/GET_MY_INFO"
const CHANGE_LOADING = "user/CHANGE_LOADING"

export const initialize = createAction(INITIALIZE)
export const getMyInfo = createAction(GET_MY_INFO, UserAPI.getMyInfo)
export const changeLoading = createAction(CHANGE_LOADING)

const initialState = {
    profile: {
        email: "",
        displayName: "",
        thumbnail: ""
    },
    readError: null,
    loading: false
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: GET_MY_INFO,
            onSuccess: (state, action) => {
                const { user } = action.payload.data
                return produce(state, draft => {
                    draft.profile = user
                    draft.loading = false
                })
            },
            onFailure: (state, action) => {
                if (action.error) {
                    return produce(state, draft => {
                        draft.readError = "SERVER_ERROR"
                        draft.loading = false
                    })
                }

                const { status } = action.payload.response

                if (status === 401 || status === 404) {
                    return produce(state, draft => {
                        draft.readError = "NOT_USER"
                        draft.loading = false
                    })
                } else {
                    return produce(state, draft => {
                        draft.readError = "SERVER_ERROR"
                        draft.loading = false
                    })
                }
            }
        }),
        [CHANGE_LOADING]: (state, action) => {
            const loading = action.payload
            return produce(state, draft => {
                draft.loading = loading
            })
        }
    },
    initialState
)
