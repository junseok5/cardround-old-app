import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import Website from "../components/list/Website"
import { BaseActions } from "../store/actionCreator";

class WebsiteContainer extends Component {
    _moveToDetail = () => {
        const { navigation, website } = this.props

        navigation.popToTop()
        navigation.goBack(null)
        navigation.navigate({
            routeName: "DetailWebsite",
            params: {
                website
            }
        })
    }

    render() {
        const { website } = this.props
        return <Website website={website} moveToDetail={this._moveToDetail} />
    }
}

export default withNavigation(WebsiteContainer)
