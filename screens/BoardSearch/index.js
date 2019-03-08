import { connect } from 'react-redux'
import BoardSearchContainer from './BoardSearchContainer';

export default connect(state => ({
    form: state.search.form.board,
    recentKeywords: state.search.recentKeywords.board,
    preview: state.listing.previewboard.preview.previewboards,
    error: state.listing.previewboard.preview.error,
    loading: state.pender.pending["listing/GET_PREVIEW_PREVIEWBOARDS"]
}))(BoardSearchContainer)