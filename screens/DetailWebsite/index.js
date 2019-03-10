import { connect } from "react-redux"
import DetailWebsiteContainer from "./DetailWebsiteContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    previewboards: state.listing.previewboard.website.previewboards,
    page: state.listing.previewboard.website.page,
    end: state.listing.previewboard.website.end,
    error: state.listing.previewboard.website.error,
    loading: state.pender.pending["listing/GET_WEBSITE_PREVIEWBOARDS"]
}))(DetailWebsiteContainer)
