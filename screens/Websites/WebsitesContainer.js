import React, { Component } from "react"
import { NetInfo } from "react-native"
import WebsitesPresenter from "./WebsitesPresenter"
import {
    BaseActions,
    CategoryActions,
    WebsiteActions
} from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"

class WebsitesContainer extends Component {
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
        const { page, selected } = this.props
        console.log(selected)
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
            await WebsiteActions.getWebsiteList(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = () => {
        WebsiteActions.initialize()
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
        console.log("Hey!")
    }

    _fetchSelectedCategory = async category => {
        const { selected } = this.props

        if (category === selected) return

        await CategoryActions.changeSelected(category)
        this._refetchWebsiteList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            listError,
            categoriesLoading,
            websitesLoading,
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
        } else if (listError) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchAll}
                />
            )
        } else {
            return (
                <WebsitesPresenter
                    categoriesLoading={categoriesLoading}
                    websitesLoading={websitesLoading}
                    websites={websites}
                    categories={categories}
                    selected={selected}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    fetchSelectedCategory={this._fetchSelectedCategory}
                />
            )
        }
    }
}

export default WebsitesContainer
