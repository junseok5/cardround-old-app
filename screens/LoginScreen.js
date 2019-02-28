import React, { Component } from "react"
import LoginContainer from "../containers/LoginContainer"

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return <LoginContainer />
    }
}

export default LoginScreen
