import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import Website from "../components/list/Website"
import { BaseActions } from "../store/actionCreator"

class WebsiteContainer extends Component {
    _moveToDetail = async navigation => {
        console.log('hey')
        const { website } = this.props

        // await BaseActions.changeModal({ name: "searchResultWeb", value: false })
        // await BaseActions.changeModal({ name: "searchWebsite", value: false })
        navigation.navigate({
            routeName: "DetailWebsite",
            params: {
                website
            }
        })
    }

    render() {
        const { website } = this.props
        return <Website data={website} moveToDetail={this._moveToDetail} />
    }
}

export default WebsiteContainer
