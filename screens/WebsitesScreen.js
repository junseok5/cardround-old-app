import React, { Component } from "react"
import WebsitesContainer from "../containers/WebsitesContainer";

class WebsitesScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <WebsitesContainer />
        )
    }
}

export default WebsitesScreen
