import React, { Component } from "react"
import styled from "styled-components"
import { StatusBar, Platform } from "react-native"
import MainNavigation from "../navigation/MainNavigation"

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

class AppContainer extends Component {
    render() {
        return (
            <Container>
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <MainNavigation />
            </Container>
        )
    }
}

export default AppContainer
