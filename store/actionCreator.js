import { bindActionCreators } from "redux"
import store from "./"
import * as authActions from "./modules/auth"
import * as userActions from "./modules/user"
import * as websiteActions from "./modules/website"

const { dispatch } = store

export const AuthActions = bindActionCreators(authActions, dispatch)
export const UserActions = bindActionCreators(userActions, dispatch)
export const WebsiteActions = bindActionCreators(websiteActions, dispatch)
