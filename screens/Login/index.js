import { connect } from "react-redux"
import LoginContainer from "./LoginContainer"

export default connect(state => ({
    loginForm: state.auth.loginForm,
    alertText: state.auth.alertText,
    loginResult: state.auth.loginResult,
    loading: state.auth.loading,
    error: state.auth.error
}))(LoginContainer)
