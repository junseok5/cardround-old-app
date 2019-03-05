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

    _onSearch = async () => {
        const { form } = this.props

        if (!form) return

        SearchActions.changeKeyword({ name: "website", value: form })
        CategoryActions.changeSelected("")
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
    form: state.search.form.website
}))(SearchWebModalContainer)
