import React, { Component } from "react"
import { NetInfo } from "react-native"
import BoardsPresenter from "./BoardsPresenter"
import { CategoryActions, BoardsActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class BoardsContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._initialize()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _initialize = () => {
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )

        const { loadingInitial, boards } = this.props

        if (loadingInitial) return
        
        this._fetchCategoryList()
        if (boards.length === 0) {
            this._fetchBoardList()
        }
    }

    _refetchAll = () => {
        this._refetchCategoryList()
        this._refetchBoardList()
    }

    _fetchBoardList = async () => {
        const { page, selected, end } = this.props

        if (end) return

        const category = selected === "인기" ? null : selected
        const query = category
            ? {
                  page,
                  category
              }
            : {
                  page
              }

        try {
            await BoardsActions.getNormalBoards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchBoardList = async () => {
        await BoardsActions.initialize("normal")
        this._fetchBoardList()
    }

    _fetchCategoryList = async () => {
        const { categories } = this.props

        if (categories.length !== 0) return

        try {
            await CategoryActions.getBoardCategoryList("BOARD")
        } catch (error) {
            console.log(error)
        }
    }

    _refetchCategoryList = async () => {
        this._fetchCategoryList()
    }

    _keyExtractor = item => item._id

    _onEndReached = () => {
        this._fetchBoardList()
    }

    _changeSelectedCategory = async category => {
        const { selected } = this.props

        if (category === selected) return

        await CategoryActions.changeSelected({
            name: "board",
            value: category
        })
        this._refetchBoardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            boards,
            error,
            loadingCategories,
            loadingBoards,
            categories,
            selected
        } = this.props

        if (!isNetworkConnected && boards.length === 0) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchAll}
                />
            )
        } else if (error) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchAll}
                />
            )
        } else {
            return (
                <BoardsPresenter
                    boards={boards}
                    loadingCategories={loadingCategories}
                    loadingBoards={loadingBoards}
                    categories={categories}
                    selected={selected}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    changeSelectedCategory={this._changeSelectedCategory}
                    onRefresh={this._refetchBoardList}
                />
            )
        }
    }
}

export default BoardsContainer
