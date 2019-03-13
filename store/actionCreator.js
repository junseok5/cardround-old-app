import { bindActionCreators } from "redux"
import store from "./"
import * as baseActions from "./modules/base"
import * as authActions from "./modules/auth"
import * as userActions from "./modules/user"
import * as boardsActions from "./modules/boards"
import * as categoryActions from "./modules/category"
import * as searchActions from "./modules/search"
import * as websitesActions from "./modules/websites"
import * as followActions from "./modules/follow"

const { dispatch } = store

export const BaseActions = bindActionCreators(baseActions, dispatch)
export const AuthActions = bindActionCreators(authActions, dispatch)
export const UserActions = bindActionCreators(userActions, dispatch)
export const BoardsActions = bindActionCreators(boardsActions, dispatch)
export const CategoryActions = bindActionCreators(categoryActions, dispatch)
export const SearchActions = bindActionCreators(searchActions, dispatch)
export const WebsitesActions = bindActionCreators(websitesActions, dispatch)
export const FollowActions = bindActionCreators(followActions, dispatch)
