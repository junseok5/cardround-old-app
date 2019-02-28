import React from "react"
import PropTypes from 'prop-types'
import { TouchableOpacity } from "react-native"
import styled from "styled-components"
import SocialButton from "../common/SocialButton"

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.View`
    margin-bottom: 40px;
`

const LogoExample = styled.Text`
    font-size: 24px;
`

const LoginButtons = styled.View``

const LoginView = ({ socialLogin }) => {
    return (
        <Container>
            <Logo>
                <LogoExample>Cardround</LogoExample>
            </Logo>
            <LoginButtons>
                <TouchableOpacity onPress={() => socialLogin("facebook")}>
                    <SocialButton
                        iconName="sc-facebook"
                        color="#3B5999"
                        title="페이스북 로그인"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => socialLogin("google")}>
                    <SocialButton
                        iconName="sc-google-plus"
                        color="#CB4023"
                        title="구글 로그인"
                    />
                </TouchableOpacity>
            </LoginButtons>
        </Container>
    )
}

LoginView.propTypes = {
    socialLogin: PropTypes.func
}

export default LoginView
