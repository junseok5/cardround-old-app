import React, { Component } from "react"
import { WebView } from "react-native"

class ExternalWebsiteContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        const title = `${navigation.getParam("name")} - ${navigation.getParam(
            "websiteName"
        )}`
        return { title }
    }

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
