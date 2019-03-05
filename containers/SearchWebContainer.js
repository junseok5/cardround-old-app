import React, { Component } from "react"
import Search from "../components/search/Search"
import { BaseActions } from "../store/actionCreator"

class SearchWebContainer extends Component {
    _openModal = () => {
        BaseActions.changeModal({ name: "searchWebsite", value: true })
    }

    render() {
        return <Search openModal={this._openModal} />
    }
}

export default SearchWebContainer
