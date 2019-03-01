import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { connect } from "react-redux"
import ProfileView from "../components/tabs/ProfileView"
import { UserActions, AuthActions } from "../store/actionCreator"

class ProfileContainer extends Component {
    componentDidMount() {
        this._fetchMyProfile()
    }

    _fetchMyProfile = async () => {
        const { profile } = this.props

        if (!profile.email) {
            try {
                await UserActions.getMyInfo()
            } catch (error) {
                const { getMyInfoResult } = this.props

                if (getMyInfoResult === "NOT_USER") {
                    AuthActions.changeLogged(false)
                    await AsyncStorage.removeItem("accessToken")
                }
            }
        }
    }

    _logout = async () => {
        AuthActions.changeLogged(false)
        await AsyncStorage.removeItem("accessToken")
    }

    render() {
        return (
            <ProfileView
                profile={this.props.profile}
                loading={this.props.loading}
                logout={this._logout}
            />
        )
    }
}

export default connect(state => ({
    profile: state.user.profile,
    getMyInfoResult: state.user.getMyInfoResult,
    loading: state.pender.pending["user/GET_MY_INFO"]
}))(ProfileContainer)
