import React, { Component } from "react"
import { connect } from "react-redux"
import SearchResultModal from "../components/modal/SearchResultModal"
import Website from "../components/list/Website"
import { ListingActions, BaseActions } from "../store/actionCreator"

class SearchResultModalWebContainer extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.keyword !== this.props.keyword) {
            this._refetchWebsiteList()
        }
    }

    _fetchWebsiteList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await ListingActions.getSearchWebsites(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = async () => {
        await ListingActions.initializeSearchWebsites()
        this._fetchWebsiteList()
    }

    _closeModal = () => {
        BaseActions.changeModal({ name: "searchResultWeb", value: false })
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {}

    render() {
        const { visible, loading, websites } = this.props
        return (
            <SearchResultModal
                visible={visible}
                loading={loading}
                websites={websites}
                keyExtractor={this._keyExtractor}
                onEndReached={this._onEndReached}
                closeModal={this._closeModal}
                ListItem={Website}
            />
        )
    }
}

export default connect(state => ({
    visible: state.base.modal.searchResultWeb,
    websites: state.listing.website.search.websites,
    error: state.listing.website.search.error,
    page: state.listing.website.search.page,
    end: state.listing.website.search.end,
    keyword: state.search.keyword.website,
    loading: state.pender.pending["listing/GET_SEARCH_WEBSITES"]
}))(SearchResultModalWebContainer)
