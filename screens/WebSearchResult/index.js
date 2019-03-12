import { connect } from "react-redux"
import WebSearchResultContainer from "./WebSearchResultContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    websites: state.websites.search.websites,
    error: state.websites.search.error,
    page: state.websites.search.page,
    end: state.websites.search.end,
    keyword: state.search.keyword.website,
    loading: state.pender.pending["websites/GET_SEARCH_WEBSITES"]
}))(WebSearchResultContainer)
