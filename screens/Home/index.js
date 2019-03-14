import { connect } from "react-redux"
import HomeContainer from "./HomeContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    boards: state.boards.following.boards,
    error: state.boards.following.error,
    page: state.boards.following.page,
    end: state.boards.following.end,
    loading: state.pender.pending["boards/GET_FOLLOWING_BOARDS"]
}))(HomeContainer)
