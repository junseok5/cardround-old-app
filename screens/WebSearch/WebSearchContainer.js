import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import {
    ListingActions,
    SearchActions,
    WebsiteActions
} from "../../store/actionCreator"
import {
    clearRecentKeyowrds,
    readRecentKeywords,
    writeRecentKeywords
} from "../../utils/recent-keywords"
import Search from "../../components/search/Search";

class WebSearchContainer extends Component {
    static navigationOptions = {
        header: null
    }

    _closeScreen = () => {
        const { navigation } = this.props

        SearchActions.initialize()
        navigation.goBack()
    }

    _onChangeForm = text => {
        SearchActions.changeForm({ name: "website", value: text })
        ListingActions.getPreviewWebsites(text)
    }

    _searchStart = keyword => {
        const { navigation } = this.props
        
        SearchActions.changeKeyword({ name: "website", value: keyword })
        navigation.navigate("WebSearchResult")

        writeRecentKeywords({ target: "webRecentKeywords", keyword })
        readRecentKeywords("webRecentKeywords")
    }

    _onClickKeyword = keyword => {
        this._searchStart(keyword)
    }

    _fetchWebsiteSearchList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await WebsiteActions.getWebsiteList(query)
        } catch (error) {
            console.log(error)
        }
    }

    _onSearch = async () => {
        const { form } = this.props

        if (!form) return

        this._searchStart(form)
    }

    _clearRecentKeywords = () => {
        clearRecentKeyowrds("webRecentKeywords")
        readRecentKeywords("webRecentKeywords")
    }

    render() {
        const {
            resultModalVisible,
            form,
            recentKeywords,
            loading,
            preview,
            error
        } = this.props

        return (
            <Search
                resultModalVisible={resultModalVisible}
                form={form}
                recentKeywords={recentKeywords}
                loading={loading}
                preview={preview}
                error={error}
                closeScreen={this._closeScreen}
                onChangeForm={this._onChangeForm}
                onSearch={this._onSearch}
                clearRecentKeywords={this._clearRecentKeywords}
                onClickKeyword={this._onClickKeyword}
            />
        )
    }
}

export default withNavigation(WebSearchContainer)
