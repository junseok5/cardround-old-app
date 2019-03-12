import { connect } from "react-redux"
import BoardSearchContainer from "./BoardSearchContainer"

export default connect(state => ({
    form: state.search.form.board,
    recentKeywords: state.search.recentKeywords.board,
    preview: state.boards.preview.boards,
    error: state.boards.preview.error,
    loading: state.pender.pending["boards/GET_PREVIEW_BOARDS"]
}))(BoardSearchContainer)
