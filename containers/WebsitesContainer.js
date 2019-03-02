import React, { Component } from "react"
import { connect } from "react-redux"
import WebsitesView from "../components/tabs/WebsitesView"
import { WebsiteActions } from "../store/actionCreator"

class WebsitesContainer extends Component {
    componentDidMount() {
        this._initialize()
    }

    _initialize = () => {
        this._fetchWebsiteList()
    }

    _fetchWebsiteList = async () => {
        const { page } = this.props

        try {
            await WebsiteActions.getWebsiteList({ page })
        } catch (error) {
            console.log(error)
        }
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        console.log('Hey!')
    }

    render() {
        return (
            <WebsitesView
                loading={this.props.loading}
                data={this.props.websites}
                keyExtractor={this._keyExtractor}
                onEndReached={this._onEndReached}
            />
        )
    }
}

export default connect(state => ({
    websites: state.website.websites,
    getWebsiteListResult: state.website.getWebsiteListResult,
    page: state.website.page,
    loading: state.pender.pending["website/GET_WEBSITE_LIST"]
}))(WebsitesContainer)
