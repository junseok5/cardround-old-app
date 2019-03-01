import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { pender } from 'redux-pender'

const INITIALIZE = "user/INITIALIZE"

export const initialize = createAction(INITIALIZE)

const initialState = {
    isUser: false
}

export default handleActions(
    
)