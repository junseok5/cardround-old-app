import React, { Component } from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { readRecentKeywords } from "../utils/recent-keywords"
import SearchHeader from "../components/search/SearchHeader"

class WebSearchWebContainer extends Component {
    _openSearchScreen = () => {
        const { navigation, recentKeywords } = this.props

        navigation.navigate("WebSearch")

        if (recentKeywords.length === 0) {
            readRecentKeywords("webRecentKeywords")
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
    keyword: state.search.keyword.website,
    recentKeywords: state.search.recentKeywords.website
}))(withNavigation(WebSearchWebContainer))
