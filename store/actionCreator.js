import { bindActionCreators } from "redux"
import store from "./"
import * as authActions from "./modules/auth"

const { dispatch } = store

export const AuthActions = bindActionCreators(authActions, dispatch)
