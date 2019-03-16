import { connect } from "react-redux"
import WebsitesContainer from "./WebsitesContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    websites: state.websites.normal.websites,
    error: state.websites.normal.error,
    page: state.websites.normal.page,
    end: state.websites.normal.end,
    categories: state.category.websiteCategories,
    selected: state.category.selected.website,
    keyword: state.search.keyword.website,
    loadingCategories:
        state.pender.pending["category/GET_WEBSITE_CATEGORY_LIST"],
    loadingWebsites: state.pender.pending["websites/GET_NORMAL_WEBSITES"],
    loadingInitial: state.pender.pending["base/GET_INITIAL_DATA"]
}))(WebsitesContainer)
