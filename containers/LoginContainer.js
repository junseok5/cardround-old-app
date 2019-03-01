import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { connect } from "react-redux"
import { AuthActions } from "../store/actionCreator"
import LoginView from "../components/login/LoginView"
import { facebookLogin } from "../utils/socialLogin"
import { emailCheck, passwordCheck } from "../utils/validate"

class LoginContainer extends Component {
    componentDidMount() {
        AuthActions.initialize()
    }

    _changeEmailForm = text => {
        AuthActions.changeLoginForm({ name: "email", value: text })
    }

    _changePasswordForm = text => {
        AuthActions.changeLoginForm({ name: "password", value: text })
    }

    _continueLogin = async () => {
        const { email, password } = this.props.loginForm

        if (!email) {
            AuthActions.changeAlertText("이메일을 입력해주세요.")
            return
        } else if (!emailCheck(email)) {
            AuthActions.changeAlertText("이메일 양식이 잘못 되었습니다.")
            return
        } else if (!password) {
            AuthActions.changeAlertText("비밀번호를 입력해주세요.")
            return
        } else if (password.length < 6) {
            AuthActions.changeAlertText("비밀번호는 6자리 이상입니다.")
            return
        } else if (password.length > 30) {
            AuthActions.changeAlertText("비밀번호는 30자리 이하입니다.")
            return
        } else if (!passwordCheck(password)) {
            AuthActions.changeAlertText("비밀번호 양식이 잘못되었습니다.")
            return
        }

        try {
            AuthActions.changeLoading(true)

            await AuthActions.localLogin({ email, password })

            const { loginResult } = this.props

            if (loginResult.ok) {
                AuthActions.changeLogged(true)
                AsyncStorage.setItem("accessToken", loginResult.token)
            } else {
                AuthActions.changeAlertText(
                    "잠시 후 다시 시도 해주시기 바랍니다."
                )
            }
            AuthActions.changeLoading(false)
        } catch (error) {
            AuthActions.changeLoading(false)
        }
    }

    _socialLogin = async type => {
        if (type === "facebook") {
            try {
                const token = await facebookLogin()

                AuthActions.changeLoading(true)

                await AuthActions.socialLogin({
                    provider: type,
                    accessToken: token
                })

                const { loginResult } = this.props

                if (loginResult.ok) {
                    AuthActions.changeLogged(true)
                    AsyncStorage.setItem("accessToken", loginResult.token)
                } else {
                    AuthActions.changeAlertText(
                        "잠시 후 다시 시도 해주시기 바랍니다."
                    )
                }
                AuthActions.changeLoading(false)
            } catch (error) {
                AuthActions.changeLoading(false)
                console.log(error)
            }
        }
    }

    _onSubmitEditing = () => {
        this._continueLogin()
    }

    render() {
        return (
            <LoginView
                loginForm={this.props.loginForm}
                alertText={this.props.alertText}
                loading={this.props.loading}
                changeEmailForm={this._changeEmailForm}
                changePasswordForm={this._changePasswordForm}
                continueLogin={this._continueLogin}
                socialLogin={this._socialLogin}
                onSubmitEditing={this._onSubmitEditing}
            />
        )
    }
}

export default connect(state => ({
    loginForm: state.auth.loginForm,
    alertText: state.auth.alertText,
    loginResult: state.auth.loginResult,
    loading: state.auth.loading,
    error: state.auth.error
}))(LoginContainer)
