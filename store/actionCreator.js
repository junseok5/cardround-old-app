import { bindActionCreators } from "redux"
import store from "./"
import * as baseActions from "./modules/base"
import * as authActions from "./modules/auth"
import * as userActions from "./modules/user"
import * as previewboardActions from "./modules/previewboard"
import * as categoryActions from "./modules/category"
import * as searchActions from "./modules/search"
import * as listingActions from "./modules/listing"

const { dispatch } = store

export const BaseActions = bindActionCreators(baseActions, dispatch)
export const AuthActions = bindActionCreators(authActions, dispatch)
export const UserActions = bindActionCreators(userActions, dispatch)
export const PreviewboardActions = bindActionCreators(
    previewboardActions,
    dispatch
)
export const CategoryActions = bindActionCreators(categoryActions, dispatch)
export const SearchActions = bindActionCreators(searchActions, dispatch)
export const ListingActions = bindActionCreators(listingActions, dispatch)
