import React, { Component } from "react"
import Website from "../components/list/Website"

class WebsiteContainer extends Component {
    _moveToDetail = async navigation => {
        const { data } = this.props

        navigation.navigate({
            routeName: "DetailWebsite",
            params: {
                website: data
            }
        })
    }

    render() {
        const { data } = this.props
        return <Website data={data} moveToDetail={this._moveToDetail} />
    }
}

export default WebsiteContainer
