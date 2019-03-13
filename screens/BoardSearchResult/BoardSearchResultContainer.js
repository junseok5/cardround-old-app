import React, { Component } from "react"
import { NetInfo } from "react-native"
import { withNavigation } from "react-navigation"
import SearchResult from "../../components/search/SearchResult"
import { BaseActions, BoardsActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"
import BoardContainer from "../../containers/BoardContainer"

class BoardSearchResultContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("keyword")
        }
    }

    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        BoardsActions.initialize("search")
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchBoardList()
        NetInfo.isConnected.addEventListener(
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

    _fetchBoardList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await BoardsActions.getSearchBoards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchBoardList = async () => {
        await BoardsActions.initialize("search")
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
            loading,
            boards,
            error
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
                <SearchResult
                    loading={loading}
                    listData={boards}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    ListItem={BoardContainer}
                    isPadding={false}
                />
            )
        }
    }
}

export default withNavigation(BoardSearchResultContainer)
