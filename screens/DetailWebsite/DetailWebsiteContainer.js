import React, { Component } from "react"
import { NetInfo } from "react-native"
import DetailWebsitePresenter from "./DetailWebsitePresenter"
import { BaseActions, BoardsActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class DetailWebsiteContainer extends Component {
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
            this._fetchBoardList()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _initialize = () => {
        const { loading } = this.props

        if (loading) {
            return
        }

        this._refetchBoardList()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _fetchBoardList = async () => {
        const {
            page,
            end,
            navigation: {
                state: {
                    params: {
                        website: { _id: websiteId }
                    }
                }
            }
        } = this.props

        if (end) return

        const query = { page, websiteId }

        try {
            await BoardsActions.getWebsiteBoards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchBoardList = async () => {
        await BoardsActions.initialize("website")
        this._fetchBoardList()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        this._fetchBoardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            navigation: {
                state: {
                    params: { website }
                }
            },
            boards,
            error,
            loading
        } = this.props

        if (!isNetworkConnected && boards.length === 0) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchBoardList}
                />
            )
        } else if (error) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchBoardList}
                />
            )
        } else {
            return (
                <DetailWebsitePresenter
                    loading={loading}
                    website={website}
                    boards={boards}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    onRefresh={this._refetchPreviewboardList}
                />
            )
        }
    }
}

export default DetailWebsiteContainer
