import React, { Component } from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { readRecentKeywords } from "../utils/recent-keywords"
import SearchHeader from "../components/search/SearchHeader"

class WebSearchWebContainer extends Component {
    _openSearchScreen = () => {
        const { navigation } = this.props

        readRecentKeywords("webRecentKeywords")
        navigation.navigate("WebSearch")
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
    keyword: state.search.keyword.website
}))(withNavigation(WebSearchWebContainer))
