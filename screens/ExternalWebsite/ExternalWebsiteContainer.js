import React, { Component } from "react"
import { WebView } from "react-native"

class ExternalWebsiteContainer extends Component {
    render() {
        return (
            <WebView
                source={{
                    uri: this.props.navigation.state.params.link
                }}
                startInLoadingState={true}
            />
        )
    }
}

export default ExternalWebsiteContainer
