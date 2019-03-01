import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as UserAPI from "../../api/user"

const INITIALIZE = "user/INITIALIZE"
const GET_MY_INFO = "user/GET_MY_INFO"

export const initialize = createAction(INITIALIZE)
export const getMyInfo = createAction(GET_MY_INFO, UserAPI.getMyInfo)

const initialState = {
    profile: {
        email: "",
        displayName: "",
        thumbnail: ""
    },
    getMyInfoResult: null
}

export default handleActions(
    {
        ...pender({
            type: GET_MY_INFO,
            onSuccess: (state, action) => {
                const { user } = action.payload.data
                return produce(state, draft => {
                    draft.profile = user
                })
            },
            onFailure: (state, action) => {
                const { status } = action.payload.response

                if (status === 401 || status === 404) {
                    return produce(state, draft => {
                        draft.getMyInfoResult = "NOT_USER"
                    })
                } else {
                    return produce(state, draft => {
                        draft.getMyInfoResult = "SERVER_ERROR"
                    })
                }
            }
        })
    },
    initialState
)
