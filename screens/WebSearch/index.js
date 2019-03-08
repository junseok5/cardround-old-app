import { connect } from 'react-redux'
import WebSearchContainer from './WebSearchContainer';

export default connect(state => ({
    resultModalVisible: state.base.modal.searchResultWeb,
    form: state.search.form.website,
    keyword: state.search.keyword.website,
    recentKeywords: state.search.recentKeywords.website,
    preview: state.listing.website.preview.websites,
    error: state.listing.website.preview.error,
    loading: state.pender.pending["listing/GET_PREVIEW_WEBSITES"]
}))(WebSearchContainer)