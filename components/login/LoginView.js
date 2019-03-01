import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import SocialButton from "../common/SocialButton"
import Spinner from "react-native-loading-spinner-overlay"
import Colors from "../../constants/Colors"

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

const LocalLogin = styled.View``

const EmailInput = styled.TextInput`
    width: 280px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 16px;
    border-width: 1px;
    border-color: ${Colors.borderColor};
    border-radius: 4px;
`

const PasswordInput = styled.TextInput`
    width: 280px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 16px;
    border-width: 1px;
    border-color: ${Colors.borderColor};
    border-radius: 4px;
`

const AlertText = styled.Text`
    padding-top: 3px;
    padding-bottom: 5px;
    color: #eb4d4b;
    text-align: right;
`

const ContinueButton = styled.View`
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    background: ${Colors.mainColor};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`

const SocialLogin = styled.View``

const LoginView = ({
    loginForm,
    alertText,
    loading,
    changeEmailForm,
    changePasswordForm,
    continueLogin,
    socialLogin
}) => {
    return (
        <Container>
            <Spinner visible={loading} />
            <Logo>
                <LogoExample>Cardround</LogoExample>
            </Logo>
            <LocalLogin>
                <EmailInput
                    placeholder="이메일"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    value={loginForm.email}
                    onChangeText={changeEmailForm}
                />
                <PasswordInput
                    placeholder="비밀번호"
                    textContentType="password"
                    secureTextEntry={true}
                    returnKeyType="send"
                    value={loginForm.password}
                    onChangeText={changePasswordForm}
                />
                <AlertText>{alertText}</AlertText>
                <TouchableWithoutFeedback onPress={continueLogin}>
                    <ContinueButton>
                        <ButtonText>계속하기</ButtonText>
                    </ContinueButton>
                </TouchableWithoutFeedback>
            </LocalLogin>
            <SocialLogin>
                <TouchableOpacity onPress={() => socialLogin("facebook")}>
                    <SocialButton
                        iconName="sc-facebook"
                        color="#3B5999"
                        title="페이스북 로그인"
                    />
                </TouchableOpacity>
            </SocialLogin>
        </Container>
    )
}

LoginView.propTypes = {
    socialLogin: PropTypes.func
}

export default LoginView
