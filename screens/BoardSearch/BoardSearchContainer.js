import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import {
    clearRecentKeyowrds,
    readRecentKeywords,
    writeRecentKeywords
} from "../../utils/recent-keywords"
import { BoardsActions, SearchActions } from "../../store/actionCreator"
import Search from "../../components/search/Search"

class BoardSearchContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentWillUnmount() {
        SearchActions.initialize("board")
    }

    _closeScreen = () => {
        const { navigation } = this.props

        SearchActions.initialize("board")
        navigation.goBack()
    }

    _onChangeForm = async text => {
        SearchActions.changeForm({ name: "board", value: text })

        if (!text) return
        await BoardsActions.getPreviewBoards(text)
    }

    _searchStart = keyword => {
        const { navigation } = this.props

        SearchActions.changeKeyword({ name: "board", value: keyword })
        navigation.navigate({
            routeName: "BoardSearchResult",
            params: {
                keyword
            }
        })

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
