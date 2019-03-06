import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { connect } from "react-redux"
import Search from "../components/search/Search"
import { BaseActions, SearchActions } from "../store/actionCreator"
import { readRecentKeywords } from "../utils/recent-keywords";

class SearchWebContainer extends Component {
    _openModal = () => {
        const { visible } = this.props

        if (visible) {
            BaseActions.changeModal({ name: "searchResultWeb", value: false })
            return
        }

        readRecentKeywords("webRecentKeywords")
        BaseActions.changeModal({ name: "searchWebsite", value: true })
    }

    render() {
        const { keyword } = this.props
        return <Search keyword={keyword} openModal={this._openModal} />
    }
}

export default connect(state => ({
    visible: state.base.modal.searchWebsite,
    keyword: state.search.keyword.website
}))(SearchWebContainer)
