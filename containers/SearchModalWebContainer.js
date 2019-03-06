import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { connect } from "react-redux"
import SearchModal from "../components/modal/SearchModal"
import {
    BaseActions,
    ListingActions,
    SearchActions,
    WebsiteActions
} from "../store/actionCreator"
import {
    writeRecentKeywords,
    clearRecentKeyowrds,
    readRecentKeywords
} from "../utils/recent-keywords"

class SearchModalWebContainer extends Component {
    _closeModal = () => {
        SearchActions.initialize()
        BaseActions.changeModal({ name: "searchWebsite", value: false })
    }

    _onChangeForm = text => {
        SearchActions.changeForm({ name: "website", value: text })
        ListingActions.getPreviewWebsites(text)
    }

    _searchStart = keyword => {
        SearchActions.changeKeyword({ name: "website", value: keyword })
        BaseActions.changeModal({ name: "searchResultWeb", value: true })

        writeRecentKeywords({ target: "webRecentKeywords", keyword })
        readRecentKeywords("webRecentKeywords")
    }

    _onClickKeyword = keyword => {
        this._searchStart(keyword)
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

        this._searchStart(form)
    }

    _clearRecentKeywords = () => {
        clearRecentKeyowrds("webRecentKeywords")
        readRecentKeywords("webRecentKeywords")
    }

    render() {
        const {
            visible,
            resultModalVisible,
            form,
            recentKeywords,
            loading,
            preview,
            error
        } = this.props

        return (
            <SearchModal
                visible={visible}
                resultModalVisible={resultModalVisible}
                form={form}
                recentKeywords={recentKeywords}
                loading={loading}
                preview={preview}
                error={error}
                closeModal={this._closeModal}
                onChangeForm={this._onChangeForm}
                onSearch={this._onSearch}
                clearRecentKeywords={this._clearRecentKeywords}
                onClickKeyword={this._onClickKeyword}
            />
        )
    }
}

export default connect(state => ({
    visible: state.base.modal.searchWebsite,
    resultModalVisible: state.base.modal.searchResultWeb,
    form: state.search.form.website,
    keyword: state.search.keyword.website,
    recentKeywords: state.search.recentKeywords.website,
    preview: state.listing.website.preview.websites,
    error: state.listing.website.preview.error,
    loading: state.pender.pending["listing/GET_PREVIEW_WEBSITES"]
}))(SearchModalWebContainer)