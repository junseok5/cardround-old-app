import React, { Component } from "react"
import WebsitesPresenter from "./WebsitesPresenter"
import { WebsiteActions } from "../../store/actionCreator"

class WebsitesContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
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

    _refetchWebsiteList = () => {
        WebsiteActions.initialize()
        this._fetchWebsiteList()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        console.log("Hey!")
    }

    render() {
        return (
            <WebsitesPresenter
                loading={this.props.loading}
                data={this.props.websites}
                listError={this.props.listError}
                refetchWebsiteList={this._refetchWebsiteList}
                keyExtractor={this._keyExtractor}
                onEndReached={this._onEndReached}
            />
        )
    }
}

export default WebsitesContainer
