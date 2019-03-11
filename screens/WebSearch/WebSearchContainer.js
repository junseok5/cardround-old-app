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
import Search from "../../components/search/Search"

class WebSearchContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentWillUnmount() {
        SearchActions.initializeWebsiteSearch()
    }

    _closeScreen = () => {
        const { navigation } = this.props

        SearchActions.initializeWebsiteSearch()
        navigation.goBack()
    }

    _onChangeForm = async text => {
        SearchActions.changeForm({ name: "website", value: text })
        
        if (!text) return
        await ListingActions.getPreviewWebsites(text)
    }

    _searchStart = keyword => {
        const { navigation } = this.props

        SearchActions.changeKeyword({ name: "website", value: keyword })
        navigation.navigate({
            routeName: "WebSearchResult",
            params: {
                keyword
            }
        })

        writeRecentKeywords({ target: "webRecentKeywords", keyword })
        readRecentKeywords("webRecentKeywords")
    }

    _onClickKeyword = keyword => {
        this._searchStart(keyword)
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
        const { form, recentKeywords, loading, preview, error } = this.props

        return (
            <Search
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
