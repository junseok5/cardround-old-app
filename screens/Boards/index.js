import { connect } from "react-redux"
import BoardsContainer from "./BoardsContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    boards: state.boards.normal.boards,
    error: state.boards.normal.error,
    page: state.boards.normal.page,
    end: state.boards.normal.end,
    categories: state.category.boardCategories,
    selected: state.category.selected.board,
    loadingCategories: state.pender.pending["category/GET_BOARD_CATEGORY_LIST"],
    loadingBoards: state.pender.pending["boards/GET_NORMAL_BOARDS"],
    loadingInitial: state.pender.pending["base/GET_INITIAL_DATA"]
}))(BoardsContainer)
