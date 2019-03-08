import React, { Component } from "react"
import { NetInfo } from "react-native"
import BoardsPresenter from "./BoardsPresenter"
import { CategoryActions, ListingActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class BoardsContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._initialize()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchCategoryList()
        this._fetchPreviewboardList()
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._initialize()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _refetchAll = () => {
        this._refetchCategoryList()
        this._refetchPreviewboardList()
    }

    _fetchPreviewboardList = async () => {
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
            await ListingActions.getNormalPreviewboards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchPreviewboardList = async () => {
        await ListingActions.initializeNormalPreviewboards()
        this._fetchPreviewboardList()
    }

    _fetchCategoryList = async () => {
        try {
            await CategoryActions.getBoardCategoryList("BOARD")
        } catch (error) {
            console.log(error)
        }
    }

    _refetchCategoryList = async () => {
        await CategoryActions.initializeBoardCategories()
        this._fetchCategoryList()
    }

    _keyExtractor = item => item._id

    _onEndReached = () => {
        this._fetchPreviewboardList()
    }

    _changeSelectedCategory = async category => {
        const { selected } = this.props

        if (category === selected) return

        await CategoryActions.changeSelected({
            name: "board",
            value: category
        })
        this._refetchPreviewboardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            previewboards,
            error,
            loadingCategories,
            loadingPreviewboards,
            categories,
            selected
        } = this.props

        if (!isNetworkConnected && websites.length === 0) {
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
                    previewboards={previewboards}
                    loadingCategories={loadingCategories}
                    loadingPreviewboards={loadingPreviewboards}
                    categories={categories}
                    selected={selected}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    changeSelectedCategory={this._changeSelectedCategory}
                />
            )
        }
    }
}

export default BoardsContainer
