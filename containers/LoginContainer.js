import React, { Component } from "react"
import { connect } from "react-redux"
import { AuthActions } from "../store/actionCreator"
import LoginView from "../components/login/LoginView"
import { Facebook } from "expo"
import { facebookLogin } from "../utils/socialLogin"

class LoginContainer extends Component {
    _socialLogin = async type => {
        if (type === "facebook") {
            try {
                const token = await facebookLogin()
    
                await AuthActions.socialLogin({
                    provider: type,
                    accessToken: token
                })
    
                console.log(this.props.loginResult)
            } catch (error) {
                console.log(this.props.loginResult)
                console.log(error)
                return null
            }
        } else if (type === "google") {
        } else {
        }
    }

    render() {
        return <LoginView socialLogin={this._socialLogin} />
    }
}

export default connect(state => ({
    loginResult: state.auth.loginResult
}))(LoginContainer)
