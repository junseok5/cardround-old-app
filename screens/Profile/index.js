import { connect } from "react-redux"
import ProfileContainer from "./ProfileContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    profile: state.user.profile,
    readError: state.user.readError,
    loading: state.user.loading,
    loadingInitial: state.pender.pending["base/GET_INITIAL_DATA"]
}))(ProfileContainer)
