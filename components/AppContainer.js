import React, { Component } from "react"
import styled from "styled-components"
import { AsyncStorage, Platform, StatusBar } from "react-native"
import { connect } from "react-redux"
import MainNavigation from "../navigation/MainNavigation"
import LoginNavigation from "../navigation/LoginNavigation"
import { AuthActions } from "../store/actionCreator";

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

class AppContainer extends Component {
    async componentDidMount() {
        // await AsyncStorage.removeItem("accessToken")
        const token = await AsyncStorage.getItem("accessToken")

        if (token) {
            AuthActions.changeLogged(true)
        }
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
