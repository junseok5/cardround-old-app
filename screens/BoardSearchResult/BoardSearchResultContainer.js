import React, { Component } from "react"
import { NetInfo } from "react-native"
import { withNavigation } from "react-navigation"
import SearchResult from "../../components/search/SearchResult"
import { BaseActions, ListingActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"
import Previewboard from "../../components/list/Previewboard"

class BoardSearchResultContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        ListingActions.initializeSearchPreviewboards()
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchPreviewboardList()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._fetchPreviewboardList()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _fetchPreviewboardList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await ListingActions.getSearchPreviewboards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchPreviewboardList = async () => {
        await ListingActions.initializeSearchPreviewboards()
        this._fetchPreviewboardList()
    }

    _closeScreen = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    _keyExtractor = item => item._id

    _onEndReached = () => {
        this._fetchPreviewboardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            loading,
            previewboards,
            error
        } = this.props

        if (!isNetworkConnected && websites.length === 0) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchPreviewboardList}
                />
            )
        } else if (error) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchPreviewboardList}
                />
            )
        } else {
            return (
                <SearchResult
                    loading={loading}
                    listData={previewboards}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    closeScreen={this._closeScreen}
                    ListItem={Previewboard}
                    isPadding={false}
                />
            )
        }
    }
}

export default withNavigation(BoardSearchResultContainer)
