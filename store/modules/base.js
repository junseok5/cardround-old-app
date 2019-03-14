import { createAction, handleActions } from "redux-actions"
import produce from "immer"

const INITIALIZE = "base/INITIALIZE"
const CHANGE_IS_NETWORK_CONNECTED = "base/CHANGE_IS_NETWORK_CONNECTED"
const CHANGE_REFRESHING = "base/CHANGE_REFRESHING"

export const initialize = createAction(INITIALIZE)
export const changeIsNetworkConnected = createAction(
    CHANGE_IS_NETWORK_CONNECTED
)
export const changeRefreshing = createAction(CHANGE_REFRESHING)

const initialState = {
    isNetworkConnected: true,
    errorMessage: {
        server: "서버 오류. 잠시 후 다시 시도해주세요.",
        network: "오프라인 상태입니다. 인터넷 연결을 확인하세요."
    }
}

export default handleActions(
    {
        [INITIALIZE]: (state, action) => initialState,
        [CHANGE_IS_NETWORK_CONNECTED]: (state, action) => {
            return produce(state, draft => {
                const isNetworkConnected = action.payload
                draft.isNetworkConnected = isNetworkConnected
            })
        },
        [CHANGE_REFRESHING]: (state, action) => {
            const refreshing = action.payload
            return produce(state, draft => {
                draft.refreshing = refreshing
            })
        }
    },
    initialState
)
