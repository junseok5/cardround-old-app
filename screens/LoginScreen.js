import React, { Component } from "react"
import styled from "styled-components"
import Colors from "../constants/Colors"
import SocialButton from "../components/common/SocialButton"

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

const LoginView = styled.View``

const Text = styled.Text``

class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <Logo>
                    <LogoExample>Cardround</LogoExample>
                </Logo>
                <LoginView>
                    <SocialButton
                        iconName="sc-facebook"
                        color="#3B5999"
                        title="페이스북 로그인"
                    />
                    <SocialButton
                        iconName="sc-google-plus"
                        color="#CB4023"
                        title="구글 로그인"
                    />
                </LoginView>
            </Container>
        )
    }
}

export default LoginScreen
