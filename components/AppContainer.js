import React, { Component } from "react"
import styled from "styled-components"
import { AsyncStorage, NetInfo, Platform, StatusBar } from "react-native"
import { connect } from "react-redux"
import MainNavigation from "../navigation/MainNavigation"
import LoginNavigation from "../navigation/LoginNavigation"
import { AuthActions, BaseActions } from "../store/actionCreator"

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

class AppContainer extends Component {
    componentDidMount() {
        this.initialize()
    }

    initialize = async () => {
        const token = await AsyncStorage.getItem("accessToken")

        if (token) {
            AuthActions.changeLogged(true)
        }

        this.handleFirstConnectivityChange()
    }

    handleFirstConnectivityChange = () => {
        NetInfo.getConnectionInfo().then(({ type }) => {
            if (type === "none" || type === "unknown") {
                BaseActions.changeIsNetworkConnected(false)
            } else {
                BaseActions.changeIsNetworkConnected(true)
            }
        })
    }

    render() {
        const { logged } = this.props
        return (
            <Container>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                {logged ? <MainNavigation /> : <LoginNavigation />}
            </Container>
        )
    }
}

export default connect(state => ({
    logged: state.auth.logged
}))(AppContainer)
