import { connect } from "react-redux"
import WebSearchResultContainer from "./WebSearchResultContainer"

export default connect(state => ({
    websites: state.listing.website.search.websites,
    error: state.listing.website.search.error,
    page: state.listing.website.search.page,
    end: state.listing.website.search.end,
    keyword: state.search.keyword.website,
    loading: state.pender.pending["listing/GET_SEARCH_WEBSITES"]
}))(WebSearchResultContainer)
