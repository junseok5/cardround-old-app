import React, { Component } from "react"
import { NetInfo } from "react-native"
import { withNavigation } from "react-navigation"
import SearchResult from "../../components/search/SearchResult"
import Website from "../../components/list/Website"
import { BaseActions, ListingActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class WebSearchResultContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("keyword")
        }
    }

    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        ListingActions.initializeSearchWebsites()
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchWebsiteList()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._fetchWebsiteList()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _fetchWebsiteList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await ListingActions.getSearchWebsites(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = async () => {
        await ListingActions.initializeSearchWebsites()
        this._fetchWebsiteList()
    }

    // _closeScreen = () => {
    //     const { navigation } = this.props
    //     navigation.goBack()
    // }

    _keyExtractor = item => item._id

    _onEndReached = () => {
        this._fetchWebsiteList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            loading,
            websites,
            error
        } = this.props

        if (!isNetworkConnected && websites.length === 0) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchWebsiteList}
                />
            )
        } else if (error) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchWebsiteList}
                />
            )
        } else {
            return (
                <SearchResult
                    loading={loading}
                    listData={websites}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    ListItem={Website}
                />
            )
        }
    }
}

export default withNavigation(WebSearchResultContainer)
