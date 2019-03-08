import { connect } from "react-redux"
import BoardSearchResultContainer from "./BoardSearchResultContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    previewboards: state.listing.previewboard.search.previewboards,
    error: state.listing.previewboard.search.error,
    page: state.listing.previewboard.search.page,
    end: state.listing.previewboard.search.end,
    keyword: state.search.keyword.board,
    loading: state.pender.pending["listing/GET_SEARCH_PREVIEWBOARDS"]
}))(BoardSearchResultContainer)
