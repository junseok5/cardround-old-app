import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as AuthAPI from "../../api/auth"

const INITIALIZE = "auth/INITIALIZE"
const SOCIAL_LOGIN = "auth/SOCIAL_LOGIN"

export const initialize = createAction(INITIALIZE)
export const socialLogin = createAction(SOCIAL_LOGIN, AuthAPI.socialLogin)

const initialState = {
    loginResult: {
        ok: false,
        error: null,
        token: null
    }
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        ...pender({
            type: SOCIAL_LOGIN,
            onSuccess: (state, action) => {
                const { data } = action.payload

                return produce(state, draft => {
                    draft.loginResult = data
                })
            },
            onFailure: (state, action) => {
                return produce(state, draft => {
                    draft.loginResult.ok = false
                })
            }
        })
        // [SOCIAL_LOGIN]: (state, action) => {
        //     const { data } = action.payload
        //     console.log(payload)
        //     return produce(state, draft => {
        //         draft.loginResult = data
        //     })
        // }
    },
    initialState
)
