import React, { Component } from "react"
import { NetInfo } from "react-native"
import WebsitesPresenter from "./WebsitesPresenter"
import {
    BaseActions,
    CategoryActions,
    WebsitesActions
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
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )

        const { loadingInitial, websites } = this.props

        if (loadingInitial) return

        this._fetchCategoryList()
        if (websites.length === 0) {
            this._fetchWebsiteList()
        }
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
        this._refetchWebsiteList()
    }

    _fetchWebsiteList = async () => {
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
            await WebsitesActions.getNormalWebsites(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = async () => {
        await WebsitesActions.initialize("normal")
        this._fetchWebsiteList()
    }

    _fetchCategoryList = async () => {
        const { categories } = this.props

        if (categories.length !== 0) return

        try {
            await CategoryActions.getWebsiteCategoryList("WEBSITE")
        } catch (error) {
            console.log(error)
        }
    }

    _refetchCategoryList = async () => {
        this._fetchCategoryList()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        this._fetchWebsiteList()
    }

    _changeSelectedCategory = async category => {
        const { selected } = this.props

        if (category === selected) return

        await CategoryActions.changeSelected({
            name: "website",
            value: category
        })
        this._refetchWebsiteList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            websites,
            error,
            loadingCategories,
            loadingWebsites,
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
                    websites={websites}
                    loadingCategories={loadingCategories}
                    loadingWebsites={loadingWebsites}
                    categories={categories}
                    selected={selected}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    changeSelectedCategory={this._changeSelectedCategory}
                    onRefresh={this._refetchWebsiteList}
                />
            )
        }
    }
}

export default WebsitesContainer
