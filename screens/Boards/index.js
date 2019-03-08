import { connect } from "react-redux"
import BoardsContainer from "./BoardsContainer"

export default connect(state => ({
    isNetworkConnected: state.base.isNetworkConnected,
    errorMessage: state.base.errorMessage,
    previewboards: state.listing.previewboard.normal.previewboards,
    error: state.listing.previewboard.normal.error,
    page: state.listing.previewboard.normal.page,
    end: state.listing.previewboard.normal.end,
    categories: state.category.boardCategories,
    selected: state.category.selected.board,
    loadingCategories: state.pender.pending["category/GET_BOARD_CATEGORY_LIST"],
    loadingPreviewboards:
        state.pender.pending["listing/GET_NORMAL_PREVIEWBOARDS"]
}))(BoardsContainer)
