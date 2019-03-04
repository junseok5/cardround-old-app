import { connect } from "react-redux"
import WebsitesContainer from "./WebsitesContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    websites: state.website.websites,
    listError: state.website.listError,
    page: state.website.page,
    categories: state.category.websiteCategories,
    selected: state.category.selected,
    categoriesLoading: state.pender.pending["category/GET_WEBSITE_CATEGORY_LIST"],
    websitesLoading: state.pender.pending["website/GET_WEBSITE_LIST"]
}))(WebsitesContainer)
