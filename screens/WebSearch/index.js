import { connect } from "react-redux"
import WebSearchContainer from "./WebSearchContainer"

export default connect(state => ({
    form: state.search.form.website,
    recentKeywords: state.search.recentKeywords.website,
    preview: state.websites.preview.websites,
    error: state.websites.preview.error,
    loading: state.pender.pending["websites/GET_PREVIEW_WEBSITES"]
}))(WebSearchContainer)
