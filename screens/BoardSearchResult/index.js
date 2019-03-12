import { connect } from "react-redux"
import BoardSearchResultContainer from "./BoardSearchResultContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    boards: state.boards.search.boards,
    error: state.boards.search.error,
    page: state.boards.search.page,
    end: state.boards.search.end,
    keyword: state.search.keyword.board,
    loading: state.pender.pending["boards/GET_SEARCH_BOARDS"]
}))(BoardSearchResultContainer)
