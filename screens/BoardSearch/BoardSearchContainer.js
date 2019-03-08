import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import {
    clearRecentKeyowrds,
    readRecentKeywords,
    writeRecentKeywords
} from "../../utils/recent-keywords"
import { ListingActions, SearchActions } from "../../store/actionCreator"
import Search from "../../components/search/Search"

class BoardSearchContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentWillUnmount() {
        SearchActions.initializeBoardSearch()
    }

    _closeScreen = () => {
        const { navigation } = this.props

        SearchActions.initializeBoardSearch()
        navigation.goBack()
    }

    _onChangeForm = async text => {
        SearchActions.changeForm({ name: "board", value: text })
        await ListingActions.getPreviewPreviewboards(text)
    }

    _searchStart = keyword => {
        const { navigation } = this.props

        SearchActions.changeKeyword({ name: "board", value: keyword })
        navigation.navigate("BoardSearchResult")

        writeRecentKeywords({ target: "boardRecentKeywords", keyword })
        readRecentKeywords("boardRecentKeywords")
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
        clearRecentKeyowrds("boardRecentKeywords")
        readRecentKeywords("boardRecentKeywords")
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

export default withNavigation(BoardSearchContainer)
