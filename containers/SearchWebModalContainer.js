import React, { Component } from "react"
import { connect } from "react-redux"
import SearchModal from "../components/modal/SearchModal"
import {
    BaseActions,
    SearchActions,
    WebsiteActions,
    CategoryActions
} from "../store/actionCreator"

class SearchWebModalContainer extends Component {
    _closeModal = () => {
        BaseActions.changeModal({ name: "searchWebsite", value: false })
    }

    _onChangeForm = text => {
        SearchActions.changeForm({ name: "website", value: text })
    }

    _fetchWebsiteSearchList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await WebsiteActions.getWebsiteList(query)
        } catch (error) {
            console.log(error)
        }
    }

    _onSearch = async () => {
        const { form } = this.props

        if (!form) return

        SearchActions.changeKeyword({ name: "website", value: form })
        BaseActions.changeModal({ name: "searchResultWeb", value: true })
        this._closeModal()
    }

    render() {
        const { visible, form } = this.props
        return (
            <SearchModal
                visible={visible}
                form={form}
                closeModal={this._closeModal}
                onChangeForm={this._onChangeForm}
                onSearch={this._onSearch}
            />
        )
    }
}

export default connect(state => ({
    visible: state.base.modal.searchWebsite,
    form: state.search.form.website,
    keyword: state.search.keyword.website
}))(SearchWebModalContainer)
