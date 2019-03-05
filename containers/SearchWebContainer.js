import React, { Component } from "react"
import { connect } from "react-redux"
import Search from "../components/search/Search"
import { BaseActions } from "../store/actionCreator"

class SearchWebContainer extends Component {
    _openModal = () => {
        const { visible } = this.props

        if (visible) {
            BaseActions.changeModal({ name: "searchResultWeb", value: false })
            return
        }

        BaseActions.changeModal({ name: "searchWebsite", value: true })
    }

    render() {
        const { keyword } = this.props
        return (
            <Search
                keyword={keyword}
                openModal={this._openModal}
            />
        )
    }
}

export default connect(state => ({
    visible: state.base.modal.searchWebsite,
    keyword: state.search.keyword.website
}))(SearchWebContainer)
