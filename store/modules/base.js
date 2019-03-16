import { createAction, handleActions } from "redux-actions"
import produce from "immer"
import { pender } from "redux-pender"
import * as InitialAPI from "../../api/initial"

const INITIALIZE = "base/INITIALIZE"
const CHANGE_IS_NETWORK_CONNECTED = "base/CHANGE_IS_NETWORK_CONNECTED"
const GET_INITIAL_DATA = "base/GET_INITIAL_DATA"

export const initialize = createAction(INITIALIZE)
export const changeIsNetworkConnected = createAction(
    CHANGE_IS_NETWORK_CONNECTED
)
export const getInitialData = createAction(
    GET_INITIAL_DATA,
    InitialAPI.getInitialData
)

const initialState = {
    isNetworkConnected: true,
    errorMessage: {
        server: "서버 오류. 잠시 후 다시 시도해주세요.",
        network: "오프라인 상태입니다. 인터넷 연결을 확인하세요."
    },
    initialData: null
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
        ...pender({
            type: GET_INITIAL_DATA,
            onSuccess: (state, action) => {
                const { data } = action.payload
                return produce(state, draft => {
                    draft.initialData = data
                })
            }
        })
    },
    initialState
)
