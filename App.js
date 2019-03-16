import React, { Component } from "react"
import { AppLoading, Asset, Font, Icon } from "expo"
import { AsyncStorage } from "react-native"
import { Provider } from "react-redux"
import store from "./store"
import AppContainer from "./components/AppContainer"

class App extends Component {
    state = {
        isLoadingComplete: false
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            )
        } else {
            return (
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            )
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            await AsyncStorage.getItem("accessToken"),
            Asset.loadAsync([
                require("./assets/images/robot-dev.png"),
                require("./assets/images/robot-prod.png")
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
            })
        ])
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error)
    }

    _handleFinishLoading = async () => {
        this.setState({ isLoadingComplete: true })
    }
}

export default App
