import React, { Component } from "react"
import { AsyncStorage, NetInfo } from "react-native"
import {
    AuthActions,
    BaseActions,
    UserActions,
    BoardsActions
} from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"
import Loading from "../../components/common/Loading"
import ProfilePresenter from "./ProfilePresenter"

class ProfileContainer extends Component {
    static navigationOptions = {
        title: "프로필"
    }

    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _initialize = () => {
        this._fetchMyProfile()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._fetchMyProfile()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _fetchMyProfile = async () => {
        const { isNetworkConnected, profile } = this.props

        if (isNetworkConnected && !profile.email) {
            try {
                UserActions.changeLoading(true)
                const token = await AsyncStorage.getItem("accessToken")
                await UserActions.getMyInfo(token)
                await BoardsActions.getFollowingPreviewBoards(token)
            } catch (error) {
                const { readError } = this.props

                if (readError === "NOT_USER") {
                    AuthActions.changeLogged(false)
                    await AsyncStorage.removeItem("accessToken")
                }
            }
        }
    }

    _refetchMyProfile = () => {
        UserActions.initialize()
        this._fetchMyProfile()
    }

    _logout = async () => {
        AuthActions.initialize()
        UserActions.initialize()
        await AsyncStorage.removeItem("accessToken")
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            loading,
            readError,
            profile
        } = this.props

        if (!isNetworkConnected && !profile.email) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchMyProfile}
                />
            )
        } else if (readError === "SERVER_ERROR") {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchMyProfile}
                />
            )
        } else if (loading) {
            return <Loading />
        } else {
            return <ProfilePresenter profile={profile} logout={this._logout} />
        }
    }
}

export default ProfileContainer
