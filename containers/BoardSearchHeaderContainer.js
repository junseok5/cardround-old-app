import React, { Component } from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { readRecentKeywords } from "../utils/recent-keywords"
import SearchHeader from "../components/search/SearchHeader"

class BoardSearchHeaderContainer extends Component {
    _openSearchScreen = () => {
        const { navigation, recentKeywords } = this.props

        navigation.navigate("BoardSearch")

        if (recentKeywords.length === 0) {
            readRecentKeywords("boardRecentKeywords")
        }
    }

    render() {
        const { keyword } = this.props

        return (
            <SearchHeader
                keyword={keyword}
                openSearchScreen={this._openSearchScreen}
            />
        )
    }
}

export default connect(state => ({
    keyword: state.search.keyword.board,
    recentKeywords: state.search.recentKeywords.board
}))(withNavigation(BoardSearchHeaderContainer))
