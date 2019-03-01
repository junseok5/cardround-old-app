import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as AuthAPI from "../../api/auth"

const INITIALIZE = "auth/INITIALIZE"
const CHANGE_LOGGED = "auth/CHANGE_LOGGED"
const CHANGE_LOGIN_FORM = "auth/CHANGE_LOGIN_FORM"
const CHANGE_ALERT_TEXT = "auth/CHANGE_ALERT_TEXT"
const LOCAL_LOGIN = "auth/LOCAL_LOGIN"
const SOCIAL_LOGIN = "auth/SOCIAL_LOGIN"
const CHANGE_LOADING = "auth/CHANGE_LOADING"

export const initialize = createAction(INITIALIZE)
export const changeLogged = createAction(CHANGE_LOGGED)
export const changeLoginForm = createAction(CHANGE_LOGIN_FORM)
export const changeAlertText = createAction(CHANGE_ALERT_TEXT)
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin)
export const socialLogin = createAction(SOCIAL_LOGIN, AuthAPI.socialLogin)
export const changeLoading = createAction(CHANGE_LOADING)

const initialState = {
    logged: false,
    loginForm: {
        email: "",
        password: ""
    },
    alertText: "",
    loginResult: {
        ok: false,
        error: null,
        token: null
    },
    loading: false
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        [CHANGE_LOGGED]: (state, action) => {
            const logged = action.payload
            return produce(state, draft => {
                draft.logged = logged
            })
        },
        [CHANGE_LOGIN_FORM]: (state, action) => {
            const { name, value } = action.payload
            return produce(state, draft => {
                draft.loginForm[name] = value
            })
        },
        [CHANGE_ALERT_TEXT]: (state, action) => {
            const text = action.payload
            return produce(state, draft => {
                draft.alertText = text
            })
        },
        ...pender({
            type: LOCAL_LOGIN,
            onSuccess: (state, action) => {
                const { data } = action.payload

                return produce(state, draft => {
                    draft.loginResult = data
                })
            },
            onFailure: (state, action) => {
                const { data, status } = action.payload.response

                if (status === 400) {
                    return produce(state, draft => {
                        draft.alertText =
                            "이메일 또는 비밀번호가 잘못되었습니다."
                    })
                } else if (status === 401 && data.error === "WRONG_PASSWORD") {
                    return produce(state, draft => {
                        draft.alertText = "비밀번호가 잘못되었습니다."
                    })
                } else {
                    return produce(state, draft => {
                        draft.alertText = "서버 오류. 다시 시도해주세요."
                    })
                }
            }
        }),
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
                    draft.alertText = "서버 오류. 다시 시도해주세요."
                })
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
