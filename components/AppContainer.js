import React, { Component } from "react"
import styled from "styled-components"
import { AsyncStorage, NetInfo, Platform, StatusBar } from "react-native"
import { connect } from "react-redux"
import MainNavigation from "../navigation/MainNavigation"
import LoginNavigation from "../navigation/LoginNavigation"
import {
    AuthActions,
    BaseActions,
    BoardsActions,
    CategoryActions,
    WebsitesActions,
    UserActions
} from "../store/actionCreator"

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`

class AppContainer extends Component {
    componentDidMount() {
        this._initialize()
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

    _initialize = async () => {
        const token = await AsyncStorage.getItem("accessToken")

        if (token) {
            AuthActions.changeLogged(true)
        }

        this.handleFirstConnectivityChange()
        this._getInitialData()
    }

    _getInitialData = async () => {
        const token = await AsyncStorage.getItem("accessToken")

        try {
            await BaseActions.getInitialData(token)

            const { initialData } = this.props
            const {
                followingPreviewBoards,
                boardCategories,
                boards,
                websiteCategories,
                websites,
                profile
            } = initialData

            BoardsActions.receiveInitialData({
                followingPreviewBoards,
                normalBoards: boards
            })
            CategoryActions.receiveInitialData({
                boardCategories,
                websiteCategories
            })
            WebsitesActions.receiveInitialData({ normalWebsites: websites })
            UserActions.receiveInitialData({ profile })
        } catch (error) {
            console.log(error)
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
    logged: state.auth.logged,
    initialData: state.base.initialData
}))(AppContainer)
