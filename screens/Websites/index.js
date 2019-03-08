import { connect } from "react-redux"
import WebsitesContainer from "./WebsitesContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    websites: state.listing.website.normal.websites,
    error: state.listing.website.normal.error,
    page: state.listing.website.normal.page,
    end: state.listing.website.normal.end,
    categories: state.category.websiteCategories,
    selected: state.category.selected.website,
    keyword: state.search.keyword.website,
    loadingCategories:
        state.pender.pending["category/GET_WEBSITE_CATEGORY_LIST"],
    loadingWebsites: state.pender.pending["listing/GET_NORMAL_WEBSITES"]
}))(WebsitesContainer)
