import { bindActionCreators } from "redux"
import store from "./"
import * as authActions from "./modules/auth"
import * as userActions from "./modules/user"

const { dispatch } = store

export const AuthActions = bindActionCreators(authActions, dispatch)
export const UserActions = bindActionCreators(userActions, dispatch)
