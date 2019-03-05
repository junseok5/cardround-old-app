import React, { Component } from "react"
import { connect } from "react-redux"
import Search from "../components/search/Search"
import { BaseActions } from "../store/actionCreator"

class SearchWebContainer extends Component {
    _openModal = () => {
        BaseActions.changeModal({ name: "searchWebsite", value: true })
    }

    render() {
        const { keyword } = this.props
        return <Search keyword={keyword} openModal={this._openModal} />
    }
}

export default connect(state => ({
    keyword: state.search.keyword.website
}))(SearchWebContainer)
