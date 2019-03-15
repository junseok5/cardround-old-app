import React, { Component } from "react"
import { AsyncStorage, NetInfo } from "react-native"
import HomePresenter from "./HomePresenter"
import ErrorNotice from "../../components/common/ErrorNotice"
import { BaseActions, BoardsActions } from "../../store/actionCreator"

class HomeContainer extends Component {
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

    _initialize = async () => {
        this._fetchBoardList()
        const token = await AsyncStorage.getItem("accessToken")
        BoardsActions.getFollowingPreviewBoards(token)
    }

    _fetchBoardList = async () => {
        const { page, end } = this.props

        if (end) return

        const token = await AsyncStorage.getItem("accessToken")

        try {
            await BoardsActions.getFollowingBoards({ token, page })
        } catch (error) {
            console.log(error)
        }
    }

    _refetchBoardList = async () => {
        await BoardsActions.initialize("following")
        this._fetchBoardList()
    }

    _keyExtractor = item => item._id

    _onEndReached = () => {
        this._fetchBoardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
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
                <HomePresenter
                    loading={loading}
                    boards={boards}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    onRefresh={this._refetchBoardList}
                />
            )
        }
    }
}

export default HomeContainer
