import { connect } from "react-redux"
import DetailWebsiteContainer from "./DetailWebsiteContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    boards: state.boards.website.boards,
    page: state.boards.website.page,
    end: state.boards.website.end,
    error: state.boards.website.error,
    loading: state.pender.pending["boards/GET_WEBSITE_BOARDS"]
}))(DetailWebsiteContainer)
