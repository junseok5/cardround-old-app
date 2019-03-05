import React, { Component } from "react"
import { NetInfo } from "react-native"
import WebsitesPresenter from "./WebsitesPresenter"
import {
    BaseActions,
    CategoryActions,
    ListingActions
} from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class WebsitesContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._initialize()
    }

    // componentDidUpdate = async (prevProps, prevState) => {
    //     if (prevProps.selected !== this.props.selected) {
    //         this._refetchWebsiteList()
    //     } else if (prevProps.keyword !== this.props.keyword) {
    //         this._refetchWebsiteSearchList()
    //     }
    // }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchWebsiteList()
        this._fetchCategoryList()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._fetchMyProfile()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _refetchAll = () => {
        this._refetchWebsiteList()
        this._refetchCategoryList()
    }

    _fetchWebsiteList = async () => {
        const { page, selected, end } = this.props

        if (end) return

        const category = selected === "인기" ? null : selected
        let query = category
            ? {
                  page,
                  category
              }
            : {
                  page
              }

        try {
            await ListingActions.getNormalWebsites(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = async () => {
        await ListingActions.initializeNormalWebsites()
        this._fetchWebsiteList()
    }

    _fetchCategoryList = async () => {
        try {
            await CategoryActions.getWebsiteCategoryList("WEBSITE")
        } catch (error) {
            console.log(error)
        }
    }

    _refetchCategoryList = () => {
        CategoryActions.initialize()
        this._fetchCategoryList()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        this._fetchWebsiteList()
    }

    _changeSelectedCategory = async category => {
        const { selected } = this.props

        if (category === selected) return

        await CategoryActions.changeSelected(category)
        this._refetchWebsiteList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            error,
            loadingCategories,
            loadingWebsites,
            websites,
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
                <WebsitesPresenter
                    loadingCategories={loadingCategories}
                    loadingWebsites={loadingWebsites}
                    websites={websites}
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

export default WebsitesContainer
